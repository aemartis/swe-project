import java.io.BufferedReader;
import java.io.File; 
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;

public class attributeFixerV2{
    static final int startOffset = 12;

    private static String innerBrackets(String input) {
        String returnString = "";
        int openBracket, closeBracket, quotes;

        //System.out.println(input);
        String bob = input;
        openBracket = bob.indexOf("{")+1;
        closeBracket = bob.indexOf("}");
        quotes = openBracket-4;
        int firstQuote = 0, prev = 0;
        while (firstQuote < quotes) {
            prev = firstQuote;
            bob = bob.replaceFirst("\"", "=");
            firstQuote = bob.indexOf("\"");
        }

        firstQuote = prev;
        String prefix = input.substring(firstQuote+1, quotes);

        //System.out.println("\nreverse: "+prefix+", openBracket: "+openBracket+", closeBracket: "+closeBracket);
        String insideBracket = input.substring(openBracket, closeBracket);
        insideBracket = insideBracket.replaceAll("'", "");

        if (!(openBracket == closeBracket)) {
            //
            ArrayList<String> replacements = new ArrayList<String>();
            while (insideBracket.contains(":")) {
                String addString = "";
                int firstColon = insideBracket.indexOf(":");
                int comma = insideBracket.indexOf(",");
                if (comma > 0) {
                    addString = "\""+prefix+insideBracket.substring(0, firstColon)+"\""+":\""+insideBracket.substring(firstColon+2, comma)+"\",";
                    insideBracket = insideBracket.replaceFirst(":", "");
                    insideBracket = insideBracket.substring(comma);
                } else {
                    addString = "\""+prefix+insideBracket.substring(0, firstColon)+"\""+":\""+insideBracket.substring(firstColon+2, insideBracket.length())+"\",";
                    insideBracket = insideBracket.replaceFirst(":", "");
                }
                
                insideBracket = insideBracket.trim();
                replacements.add(addString);
            }

            String replaceString = "";
            for (int i = 0; i < replacements.size(); i++) {
                replaceString += replacements.get(i)+" ";
            }

            //System.out.println("\nreplace string: "+replaceString);
            if (replaceString.length() != 0)
                replaceString = replaceString.substring(0, replaceString.length()-2).trim();

            String temp = input.substring(firstQuote, closeBracket+1);
            returnString = input.replace(temp, replaceString);

            //System.out.println("\nreturn string: "+returnString+"\n");
        } else {
            String temp = input.substring(firstQuote, closeBracket+1);
            String replaceString = "\""+prefix+"\":"+"\"False";
            returnString = input.replace(temp, replaceString);
        }


        return returnString;
    }

    public static void main(String[] args) {
        try {
            FileWriter writer = new FileWriter("attributes.json");
            BufferedReader br = new BufferedReader(new FileReader(new File("out.json")));
            String avail;

            int huh = 0;
            while ((avail = br.readLine()) != null && huh != 300000) {
                //System.out.println("\nbusiness: "+huh);
                huh++;
                if (!avail.contains("attributes\":null")) {
                    int start = avail.indexOf("attributes\":");
                    String temp = avail.substring(start-1, avail.length());

                    //System.out.println("temp:"+temp);
                    int counter = 0;
                    String countingString = temp;
                    while (countingString.contains("{")) {
                        counter++;
                        countingString = countingString.replaceFirst("\\{"," ");
                    }

                    if (countingString.contains("hours"))
                        counter--;
                    if (countingString.contains("hours\":null"))
                        counter++;

                    int end = temp.indexOf("}");
                    ArrayList<Integer> prev = new ArrayList<Integer>();
                    String e = temp;
                    for (int i = 0; i < counter; i++) {
                        prev.add(end);
                        e = e.replaceFirst("\\}"," ");
                        end = e.indexOf("}");
                    }

                    if (counter != 0)
                        end = prev.get(counter-1);
                    if (end >= temp.length()-2)
                        end = temp.length()-2;

                    String finalString = temp.substring(startOffset+1, end+1);

                    //System.out.println(temp);
                    String replace = temp.substring(0, end+2);
                    //System.out.println(replace);
                    //System.out.println("values: c:"+counter+", e:"+end);

                    if (finalString.contains("u'"))
                        finalString = finalString.replaceAll("u'", "");

                    if (!finalString.contains("null")) {
                        finalString = finalString.substring(1, finalString.length());
                        while (finalString.contains("{")) {
                            //System.out.println("\nCurrString: "+finalString);
                            finalString = innerBrackets(finalString);
                            if (finalString.contains("\"\""))
                                finalString = finalString.replaceAll("\"\"", "\"");
                        } 

                        if (finalString.endsWith(","))
                        finalString = finalString.substring(0, finalString.length()-1);

                        if (finalString.endsWith("}"))
                            finalString = finalString.substring(0, finalString.length()-1);

                        //if (finalString.contains("\"\""))
                            //finalString = finalString.replaceAll("\"\"", "\"");
                        finalString += ",";
                        //System.out.println("\n"+finalString);
                        String lastString = avail.replace(replace, finalString.substring(0, finalString.length()));

                        writer.write(lastString+"\n");
                        //writer.write("{"+finalString+"\n");
                    } else {
                        String lastString = avail.replace(replace, "");
                        writer.write(lastString+"\n");
                        //writer.write("{}\n");
                    }                
                } else {
                    writer.write(avail+"\n");
                }

            }
            
            writer.close();
            br.close();
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }                                                               
    }
}
