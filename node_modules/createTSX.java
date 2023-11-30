import java.io.BufferedReader;
import java.io.File; 
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;

public class createTSX {
    public static void main(String[] args) {
        BufferedReader br = null;
        try {
            FileWriter writer = new FileWriter("imageSource.tsx");
            br = new BufferedReader(new FileReader(new File("paths.txt")));
            String bob;

            writer.write("function imageSource(num: number) {\n"+
                "\tvar imgSrc\n"+
                "\tswitch (num) {\n");

            for (int i = 0; i < 131; i++) {
                if ((bob = br.readLine()) != null) {
                    String avail = "";
                    avail = "case "+i+": imgSrc = require(\"\"); break;\n";
                    avail = avail.replaceAll("\"\"", bob.trim());
                    writer.write("\t\t"+avail);
                }
            }
            writer.write("\t\tdefault: imgSrc = require(\"./images/photos/ApplebeesGrillBarBrandonManitobaLogo/ApplebeesGrillBarBrandonManitobaLogo0.png\"); break;\n");
            writer.write("\t}\n"+
                "\treturn imgSrc\n"+
                "}\n"+
                "export {imageSource}");
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