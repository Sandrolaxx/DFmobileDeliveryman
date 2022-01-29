## ❄️ Sobre o projeto

Trata-se de uma aplicação que irá auxiliar os entregadores nas entregas dos pedidos realizados no e-commerce da DonaFrost. Foi desenvolvido utilizando Typescript(superset de JS) e o framework React Native.

---

## 🤓 Tecnologias utilizadas

* 🔤 Lang - [TypeScript](https://www.typescriptlang.org/)
* ⚛️ Framework - [React Native](https://reactnative.dev/)
* ✨ Estilização - [Styled Components](https://styled-components.com/)

---

## 🖼🖌Telas do projeto

* Splash Screen

![Splash Screen](https://user-images.githubusercontent.com/61207420/151669818-68921974-3729-481a-bd09-95d5740d0f47.png)


* Tela Inicial

![Tela Inicial](https://user-images.githubusercontent.com/61207420/151669925-f784ef62-f105-4786-87b1-bd84aae2aebf.png)

* Buscando Pedidos

![Buscando Pedidos](https://user-images.githubusercontent.com/61207420/151669871-9777e60d-1159-4933-98d1-f44799e9449d.png)

* Listagem dos Pedidos - Dos mais antigos para os mais novos

![Listagem dos Pedidos](https://user-images.githubusercontent.com/61207420/151670615-3fd84375-135d-49c7-ba74-a2ba3dddb44d.png)

* Listagem dos Pedidos - Scroll até o último

![Listagem dos Pedidos Scroll até o último](https://user-images.githubusercontent.com/61207420/151670706-020acbdf-3b3a-40ed-bde9-16cdb6880065.png)

* Detalhes do Pedido

![Detalhes do Pedido](https://user-images.githubusercontent.com/61207420/151670776-4d8331aa-3c42-4ca0-adbc-8f88bde7c040.png)

* Iniciar Navegação - Abre o maps e já inicia a trajetória da entrega.

![Iniciar Navegação](https://user-images.githubusercontent.com/61207420/151670868-3dfb56d1-9872-4a23-9d37-dcec0f76dbed.png)

* Confirmação de entrega do Pedido

![Confirmação de entrega do Pedido](https://user-images.githubusercontent.com/61207420/151670989-cc902f35-ced1-4b90-9353-adccf0dee41f.png)

* Cenário de não existir Pedidos Pendentes de entrega.

![Cenário de não existir Pedidos Pendentes de entrega](https://user-images.githubusercontent.com/61207420/151671038-c3a73808-03f3-46cb-985b-373b149233b5.png)

* Cenário de erro ao listar pedidos

![Cenário de erro ao listar pedidos](https://user-images.githubusercontent.com/61207420/151671086-33e7e2d3-7462-4af2-b48f-57af1121838e.png)

---

## 🔥 Conjunto de aplicações DonaFrost

Essa aplicação faz parte do conjunto de aplicações que juntas dão vida ao projeto DonaFrost, essa aplicação que está vendo agora se trata do aplicativo mobile, sendo um cliente que consome os microsserviços do back-end.

Você pode encontrar as outras aplicações em:

[Microservices](https://github.com/Sandrolaxx/dfmicroservices) e [Front-end e-commerce](https://github.com/Sandrolaxx/frostNext)

Abaixo diagrama das aplicações em conjunto: 

![diagrama](https://user-images.githubusercontent.com/61207420/150238760-bbf5ac95-a4ab-4443-b431-28e6f7c25e77.png)

---

## 🧑‍💻 Como iniciar a aplicação

Para executar o projeto será necessário o emulador do Android Studio ou um dispositivo físico. Documentação sobre o assunto 👉 https://react-native.rocketseat.dev/

Primeiro vamos baixar todas as dependências do projeto:

```bash
npm install
# or
yarn install
```

Agora vamos executar o servidor de desenvolvimento:

```bash
npm start
# or
yarn start
```

Vamos inicializar o emulador:

```bash
npm android
# or
yarn android 
```
Realizar os seguintes comandos para mapear as portas do emulador as portas locais do nosso computador, para assim poder realizar as chamadas ao back-end.

```bash
adb -s emulator-5554 reverse tcp:8082 tcp:8082
adb -s emulator-5554 reverse tcp:9091 tcp:9091
```

O aplicativo abrirá automaticamente ao fim do comando yarn android.
