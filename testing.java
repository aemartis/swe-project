import java.io.BufferedReader;
import java.io.File; 
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.util.regex.*;

public class testing {
    public static void main(String[] args) {
        try {
            FileWriter writer = new FileWriter("out.json");
            BufferedReader br = new BufferedReader(new FileReader(new File("yelp_academic_dataset_business.json")));
            String avail;

            Pattern p1 = Pattern.compile("Restaurants"+"[,\"]");
            Pattern p2 = Pattern.compile("Brewery"+"[,\"]");
            Pattern p3 = Pattern.compile("Pubs"+"[,\"]");
            Pattern p4 = Pattern.compile("Food"+"[,\"]");
            Matcher m1, m2, m3, m4;

            while ((avail = br.readLine()) != null) {
                avail += "\n";
                m1 = p1.matcher(avail);
                m2 = p2.matcher(avail);
                m3 = p3.matcher(avail);
                m4 = p4.matcher(avail);

                //data.contains("Restaurants") || data.contains("Brewery") || data.contains("Pubs")
                if (m1.find() || m2.find() || m3.find()) {
                    writer.write(avail);
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