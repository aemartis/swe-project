import java.io.BufferedReader;
import java.io.File; 
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;
import java.util.regex.Pattern;

public class getPath {
    public static void main(String[] args) {
        BufferedReader br = null;
        try {
            FileWriter writer = new FileWriter("paths.txt");
            br = new BufferedReader(new FileReader(new File("restaurant_data.json")));
            String avail;

            Pattern regex = Pattern.compile("[ |,|.|_|-|&|\\+|\']");
            ArrayList<String> temp = new ArrayList<String>();
            int index = 0;
            String ogName = "";

            while ((avail = br.readLine()) != null) {
                if (avail.contains("name\":")) {
                    String restName = avail.substring(avail.indexOf(":")+1, avail.length());
                    restName = restName.replaceAll("\"","");
                    ogName = restName.replaceAll(",", "").trim();
                    restName = regex.matcher(restName).replaceAll("");
                    temp.add(restName);

                    String name = temp.get(index);
                    avail = "   \"./images/photos/"+name+"BrandonManitobaLogo/"+name+"BrandonManitobaLogo0.png\"";
                    avail += "\n";
                    writer.write(avail);
                    index++;
                }

                //if (avail.contains("source\":")) {

                //}
            }
            
            writer.close();

        } catch (FileNotFoundException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        } finally {
            if (br != null) {
                try {
                    br.close();
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
        }
    }
}