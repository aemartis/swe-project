import java.io.BufferedReader;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;

public class subtypes {

    public static void main(String[] args){
        try{
            FileWriter writer = new FileWriter("attributes2.json");
            BufferedReader br = new BufferedReader(new FileReader(new File("restSubtypes.txt")));
            ArrayList<String> attributes = new ArrayList<String>();

            String[] splits;
            String[] splitOnSpace;
            String line;
            String trimmed;
            String restRemoved = "";

            writer.write("[\n");
            int j = 0;
            while ((line = br.readLine()) != null){
                splits = line.split(",");
                for( int i = 0; i < splits.length; i++ ){
                    trimmed = splits[i].trim();
                    splitOnSpace = trimmed.split(" ");
                    for( int k = 0; k < splitOnSpace.length; k++ ){        
                        if( !splitOnSpace[k].equals("Restaurant") && !splitOnSpace[k].equals("restaurant") ){
                            restRemoved += splitOnSpace[k] + " ";
                        }
                         
                         
                    }
                    if(!restRemoved.equals("") && !attributes.contains(restRemoved.trim())){
                        attributes.add(restRemoved.trim());
                        writer.write("\t{\"0\": \"" +  restRemoved.trim() + "\"},\n");
                    }
                    restRemoved = "";
                    j++;
                }

            }
            
            writer.write("]");
            writer.close();

        } catch (FileNotFoundException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

}
