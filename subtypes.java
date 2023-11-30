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
            FileWriter writer = new FileWriter("attributes.json");
            BufferedReader br = new BufferedReader(new FileReader(new File("restSubtypes.txt")));
            ArrayList<String> attributes = new ArrayList<String>();

            String[] splits;
            String line;
            String trimmed;

            writer.write("{\n");
            int j = 0;
            while ((line = br.readLine()) != null){
                splits = line.split(",");

                for( int i = 0; i < splits.length; i++ ){
                    trimmed = splits[i].trim();
                    if( !attributes.contains(trimmed) ){
                        attributes.add(trimmed);
                        writer.write("\"" + j + "\": \"" +  trimmed + "\",\n");
                        j++;
                    }
                }

            }
            
            writer.write("}");
            writer.close();

        } catch (FileNotFoundException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

}
