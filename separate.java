import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileWriter;
import java.io.IOException;
import java.util.Scanner;
import java.util.ArrayList;

public class separate {
    public static void main(String [] args){
        try {
        File myObj = new File("restaurantCategoriesUNSEPARATED.txt");
        Scanner myReader = new Scanner(myObj);
        ArrayList<String> catagories = new ArrayList<String>();
        ArrayList<String> traits = new ArrayList<String>();
        
        while (myReader.hasNextLine() ) {
        String data = myReader.nextLine();
        traits.add(data);
        
        String[] splits = data.split(",");

            for(int i = 0; i < splits.length; i++){
                String lines = splits[i].trim() + ",";
                if( !catagories.contains(lines) ){
                    catagories.add(lines);
                    System.out.println(lines);
                } 
            }
        }

        File outFile = new File("output.txt");
        
        if (outFile.createNewFile()) {
            System.out.println("File created: " + outFile.getName());
            } else {
            System.out.println("File already exists.");
            }
        
        FileWriter myWriter = new FileWriter("output.txt");
        
        //write the headers
        for(int i = 0; i < catagories.size(); i++){
            myWriter.write( catagories.get(i) );
        }

        myWriter.write("\n");

        //write the lines
        for(int i = 0; i < traits.size(); i++){
            String last = traits.get(i) + ",";
            for(int j = 0; j < catagories.size(); j++){
                if(last.contains(catagories.get(j))){
                    myWriter.write("True,");
                }
                else{
                    myWriter.write("False,");
                }
            }
            myWriter.write("\n");
        }

        
        System.out.println("Successfully wrote to the file.");

        myWriter.close();
        myReader.close();

    } catch (FileNotFoundException e) {
      System.out.println("An error occurred.");
      e.printStackTrace();
    }
    catch (IOException i){
        System.out.println("An error occurred.");
        i.printStackTrace();
    }
    }
}