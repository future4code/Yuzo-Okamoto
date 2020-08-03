import * as fs from 'fs';

class JSONFileManager {
  fileName: string;

  constructor(fileName: string) {
    this.fileName = fileName;
  }

  getObjectFromFile(fileName: string): any {
    try {
      const fileData = fs.readFileSync(fileName).toString();
      return JSON.parse(fileData);
    } catch (error) {
      console.log(`Erro na leitura do arquivo ${fileName}`);
      return [];
    }
  }

  writeObjectToFile(fileName: string, objectToSave: any): void {
    try {
      const fileNewData = JSON.stringify(objectToSave, null, 2);
      fs.writeFileSync(fileName, fileNewData);
    } catch (error) {
      console.log(
        `Erro ao tentar salvar ${objectToSave} no arquivo ${fileName}`
      );
    }
  }
}

export default JSONFileManager;
