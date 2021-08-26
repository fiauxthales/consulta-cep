import axios from "axios";

const buscaEndereco = axios.create({
  baseURL: "https://viacep.com.br/ws/",
});

export default buscaEndereco;
