const express = require("express");;
const app = express();

const cors = require("cors")
const bodyParser = require("body-parser");

const usuariosRoutes = require("./routes/usuariosRoutes");
const dadosPessoaisRoutes = require("./routes/dadosPessoaisRoutes");
const enderecosRoutes = require("./routes/enderecosRoutes");
const produtosRoutes = require("./routes/produtosRoutes");
const pedidosRoutes = require("./routes/pedidosRoutes");
const loginRoutes = require("./routes/loginRoutes");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.use("/usuarios", usuariosRoutes);
app.use("/dadosPessoais", dadosPessoaisRoutes);
app.use("/enderecos", enderecosRoutes);
app.use("/produtos", produtosRoutes);
app.use("/pedidos", pedidosRoutes);
app.use("/login", loginRoutes);

app.listen(8080, () => {
    console.log("[AVISO]: Conexão estabelecida com o servidor.");
});