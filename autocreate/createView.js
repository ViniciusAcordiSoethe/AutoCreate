const fs = require('fs');
const path = require('path');

// Primeiro passe o nome do arquivo a ser Copiado
const nomeArquivoExemplo = 'NovoView.vue';
// depois seu Diretorio
const caminhoDiretorioModelo = path.join(__dirname, '/copia');
// então junta os 2
const caminhoArquivoModelo = path.join(caminhoDiretorioModelo, nomeArquivoExemplo);

// Primeiro o nome de arquivo que vai ser criado
const nomeArquivo = 'Example.vue';
// o diretorio onde ele vai ser criado
const caminhoDiretorio = path.join(__dirname, '../src/views');
//junta os dois 
const caminhoArquivo = path.join(caminhoDiretorio, nomeArquivo);

// Lê o conteúdo do arquivo de exemplo
fs.readFile(caminhoArquivoModelo, 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  // Cria o arquivo com o conteúdo do arquivo de exemplo
  fs.writeFile(caminhoArquivo, data, (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(` View criada com sucesso!`);
  });
});