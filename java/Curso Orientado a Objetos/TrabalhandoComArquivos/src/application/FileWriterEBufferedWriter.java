package application;

import java.io.BufferedWriter;
import java.io.FileWriter;
import java.io.IOException;

public class FileWriterEBufferedWriter {

	public static void main(String[] args) {

		String[] lines = new String [] {"Bom dia", "Boa tarde", "Boa noite"};
		
		String path = "C:\\Users\\Thiago\\Desktop\\ESTUDO GERAL\\java\\Curso Orientado a Objetos\\TrabalhandoComArquivos\\out.txt"; 

		// o TRUE acrescentará os dados ao arquivo sem recriá-lo.
		
		try(BufferedWriter bw = new BufferedWriter(new FileWriter(path, true))){
			for (String line : lines) {
				bw.write(line);
				bw.newLine();
			}
		}
		catch (IOException e) {
			e.printStackTrace();
		}
	}
}


