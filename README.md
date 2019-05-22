# ts-generic-template

Template generico para a criação de projetos no React Native de forma rapida.

## Configurando o Release

Para poder compilar sua aplicação em release para a publicação na loja e para configurar o firebase é preciso alterar alguns arquivos e executar alguns comandos.

- Primeiramente abra o CMD ou o Powershell como administrador.
- Siga para a pasta *C:\Program Files\Java\jdkx.x.x_x\bin*
- Execute o comando
<script src="https://gist.github.com/salomaoluiz/995813febbf65cf75dc8a4c8a282c0d0.js"></script>
- Aqui irá pedir algumas informações e para inserir uma senha, anote essa senha em algum lugar, não à perca por nada.
- Isso irá criar um arquivo chamado **my-release-key.keystore**
- Mova o arquivo **my-release-key.keystore** para a pasta *./android/app/*
- Vá até o arquivo *./android/gradle.properties* e adicione ao final:
<script src="https://gist.github.com/salomaoluiz/a441dafeae0a0c9e299704ac131738c9.js"></script>
- Agora no arquivo *./android/app/build.gradle* insira as seguintes linhas:
<script src="https://gist.github.com/salomaoluiz/80b64be09bb89cf7901e054cc5cf4c5c.js"></script>

Pronto, com isso você tem o projeto configurado para gerar versões release da aplicação, para gerar basta ir na pasta *./android/* e executar o comando *./gradlew assembleRelease* ele irá gerar o apk na pasta *android/app/build/outputs/apk/release/app-release.apk*.

Também é possível utilizar na pasta raíz o comando *react-native run-android --variant release* para gerar o apk e já instalar no dispositivo.

Para maiores informações veja [Generating the release APK](https://facebook.github.io/react-native/docs/signed-apk-android#generating-the-release-apk)

## Configurando Firebase
Com a versão release pronta, vamos conectar a aplicação ao Firebase, primeiramente obtendo uma chave SHA-1, que será necessário posteriormente. 

Para facilitar nossa vida, já que será esses comandos do *keytool* será usado muitas vezes, vá até as *configurações do sistema*, em seguida em *Configurações Avançadas do Sistema* clique em *Variáveis de Ambiente*, nas *Variáveis do Sistema* procure por *Path*, selecione-o e clique em editar. Vá em *Novo* e insira o caminho da pasta bin do jdk, por exemplo, *C:\Program Files\Java\jdkx.x.x_x\bin*. Feche todos os prompt de comando e abra-os novamente, agora é possível usar o comando *keytool* a partir de qualquer pasta.

Após feito isso, siga para a pasta *./android/* e execute o comando:
<script src="https://gist.github.com/salomaoluiz/aefbe93765fcb1ca4851c5d3dbebaf78.js"></script>

Substituindo os *android* pela sua senha da keystore que você criou anteriormente. Após isso irá aparecer diversos dados, entre eles a chave SHA1, guarde-a pois usaremos posteriormente.

Para uma explicação mais aprofundada de como gerar a SHA1 veja: [Get SHA1 from Android Studio](https://medium.com/pen-bold-kiln-press/sha-1-android-studio-ec02fb893e72)

Agora começaremos a configurar o firebase, apenas a configuração básica.

- Primeiro vá até o [firebase](https://firebase.google.com/) realize o login e crie um projeto novo.
- Vá em *Configurações do projeto* e em *Seus Aplicativos* selecione a opção android e insira os seguintes dados 
  - com.**nome_do_seu_projeto**
  - Apelido para seu projet
  - Chave SHA1
 
- Faça o download do arquivo **google-services.json** e coloque-o dentro de *./android/app*
- Compile a aplicação utilizando o *react-native run-android*

# Como Contribuir
- Realize um Fork do Projeto
- Crie uma branch para implementar a sua nova feature
- Faça as mudanças que deseje
- Envie um push da branch para o origin
- Abra um Pull Request

# Licença
Distribuído sob a licença MIT. Veja LICENSE para mais informações.

# Contato
Salomão Luiz de Araújo Neto

Facebook: [Salomao Luiz](https://www.facebook.com/salomao.luiz.28) </br>
LinkedIn: [Salomao Luiz](https://www.linkedin.com/in/salomao-luiz/) </br>
Email: [salomao.cruz.15@gmail.com](salomao.cruz.15@gmail.com)