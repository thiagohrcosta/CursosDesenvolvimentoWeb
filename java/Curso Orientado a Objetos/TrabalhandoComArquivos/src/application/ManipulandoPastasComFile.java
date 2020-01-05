package application;

import java.io.File;
import java.util.Scanner;

public class ManipulandoPastasComFile {

	public static void main(String[] args) {

		Scanner sc = new Scanner(System.in);
		
		System.out.println("Digite uma pasta: ");
		String strPath = sc.nextLine();
		
		File path = new File(strPath);
		
		File[] folders = path.listFiles(File::isDirectory);
		System.out.println("PASTAS: ");
		for (File folder : folders) {
			System.out.println(folder);
			
		}
		
		File[] files = path.listFiles(File::isFile);
		System.out.println("Arquivos: ");
		for (File file : files ) {
			System.out.println(file);
		}
		
		
		/*
		 * Criando diretórios:
		 * ========================================================
		 * boolean success = new File(strPath + "\\subdir").mkdir();
		 * 
		 */
		
		sc.close();

	}

}
