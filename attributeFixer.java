import java.io.BufferedReader;
import java.io.File; 
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;

public class attributeFixer {
    static final int startOffset = 12;

    private static String innerBrackets(String input) {
        String returnString = "";
        int openBracket, closeBracket, quotes;

        String reverse = new StringBuilder(input).reverse().toString();
        openBracket = reverse.indexOf("{");
        
        reverse = reverse.substring(openBracket);
        for (int i = 0; i < 2; i++)
            reverse = reverse.replaceFirst("\"", "]");
        quotes = reverse.indexOf("\"")+openBracket;

        openBracket = input.length() - openBracket;
        quotes = input.length() - quotes;
        closeBracket = input.indexOf("}");
        String prefix = input.substring(quotes, openBracket-4);

        String insideBracket = input.substring(openBracket, closeBracket);
        insideBracket = insideBracket.replaceAll("'", "");

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
        if (replaceString.length() != 0)
            replaceString = replaceString.substring(0, replaceString.length()-2).trim();

        String temp = input.substring(quotes-1, closeBracket+1);
        returnString = input.replace(temp, replaceString);

        return returnString;
    }

    public static void main(String[] args) {
        try {
            FileWriter writer = new FileWriter("attributes.json");
            BufferedReader br = new BufferedReader(new FileReader(new File("out.json")));
            String avail;

            while ((avail = br.readLine()) != null) {

                int start = avail.indexOf("attributes\":");
                start += startOffset;
                String temp = avail.substring(start, avail.length());
                int end = temp.indexOf("}");
                
                String finalString = temp.substring(0, end+1);
                
                if (!finalString.contains("null")) {
                    finalString = finalString.substring(1, finalString.length());
                    if (finalString.contains("{"))
                        finalString = innerBrackets(finalString);

                    if (finalString.endsWith(","))
                        finalString = finalString.substring(0, finalString.length()-1);

                    if (!finalString.endsWith("}"))
                        finalString += "}";
                    writer.write("{"+finalString+"\n");
                } else {
                    writer.write("{}\n");
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
