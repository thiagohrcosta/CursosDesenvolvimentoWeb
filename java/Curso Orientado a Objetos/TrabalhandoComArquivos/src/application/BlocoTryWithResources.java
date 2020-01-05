package application;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;

public class BlocoTryWithResources {

	public static void main(String[] args) {

		// Estudo sobre Bloco Try with resources

		// FileReader e BufferedReader

		String path = "C:\\Users\\Thiago\\Desktop\\ESTUDO GERAL\\java\\Curso Orientado a Objetos\\TrabalhandoComArquivos\\in.txt";

		try (BufferedReader br = new BufferedReader(new FileReader(path))){
			String line = br.readLine();

			while (line != null) {
				System.out.println(line);
				line = br.readLine();
			}
		}
		catch (IOException e){
			System.out.println("Error: " + e.getMessage());			
		}
	}
}
