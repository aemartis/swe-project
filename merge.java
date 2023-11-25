import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;
import java.io.FileWriter;
import java.util.ArrayList;

public class merge{

    public static void main(String [] args){
        BufferedReader reviewReader = null;
        BufferedReader filteredRestsReader = null;
        try  
        {  
            filteredRestsReader = new BufferedReader( new FileReader( "yelp_academic_dataset_business.csv" ) );
            ArrayList<String []> restIDs = new ArrayList<String []>();
            String[] splits;
            String inLine;

            //get the restaurant IDs and info into memory
            while((inLine = filteredRestsReader.readLine()) != null){
                splits = inLine.split(",", 2);
                restIDs.add(splits);
            }
            
            //reader for the file containing the yelp reviews
            reviewReader = new BufferedReader( new FileReader( "yelp_academic_dataset_review.csv" ) );
            
            
            //open outFile if it exists, create it if it does not
            File outFile = new File("cleanedData.txt");
            if (outFile.createNewFile()) {
                System.out.println("File created: " + outFile.getName());
            } 
            else {
                System.out.println("File already exists.");
            }
            
            
            FileWriter writer = new FileWriter("cleanedData.txt");
            String BID;
            String UID;
            String UStars;
            String date;
            String month;
            String day;
            
            String[] months = {
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "June",
                "July",
                "Aug",
                "Sept",
                "Oct",
                "Nov",
                "Dec",
            };

            while((inLine = reviewReader.readLine()) != null){
                splits = inLine.split(",");
                BID = splitTrim(splits,2);
                System.out.println("Matching on..." + BID);
                for( int i = 0; i < restIDs.size(); i++ ){
                    if( BID.equals(restIDs.get(i)[0]) ){
                        UID = splitTrim(splits,1);
                        UStars = splits[3].split(":")[1];
                        date = splitTrim(splits, splits.length - 1);
                        month = date.substring(5,7);
                        day = date.substring(8,10);
                        System.out.println(UID + "," + UStars + "," + months[Integer.parseInt(month) - 1] + "," + day + "," + restIDs.get(i)[0] + "," + restIDs.get(i)[1]);
                        writer.write(UID + "," + UStars + "," + months[Integer.parseInt(month) - 1] + "," + day + "," + restIDs.get(i)[0]  + "," + restIDs.get(i)[1]);
                    }
                }
            }
            writer.close();
        }  
        catch(Exception e)  {  
            e.printStackTrace();  
        }  
    }

    public static String splitTrim(String[] input, int index){
        String[] splits = input[index].split(":", 2);
        return splits[1].substring(1,splits[1].length() - 1);
    }

}