import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    meusCarros: [],
    marcas: ["Marca 01", "Marca 02"],

    modelos01: ["Modelo 01 - Ma 01", "Modelo 02 - Ma 01"],
    modelos02: ["Modelo 01 - Ma 02 ", "Modelo 02 - Ma 02"],

    versoesMa1Mo1: ["Versao 01 - Ma 01 - Mo 01", "Versao 02 - Ma 01 - Mo 01"],
    versoesMa1Mo2: ["Versao 01 - Ma 01 - Mo 02", "Versao 02 - Ma 01 - Mo 02"],

    versoesMa2Mo1: ["Versao 01 - Ma 02 - Mo 01", "Versao 02 - Ma 02 - Mo 01"],
    versoesMa2Mo2: ["Versao 01 - Ma 02 - Mo 02", "Versao 02 - Ma 02 - Mo 02"],
  },
  mutations: {
    ADICIONAR_CARRO: (state, payload) => {
      var novoCarro = {
        marca: payload.marcaSelecionada,
        modelo: payload.modeloSelecionado,
        versao: payload.versaoSelecionada,
      };
      state.meusCarros.push(novoCarro);
    },
    REMOVER_CARRO: (state, payload) => {
      state.meusCarros.splice(payload.index, 1);
    },
    EDITAR_CARRO: (state, payload) => {
      var carroAtualizado = {
        marca: payload.marca,
        modelo: payload.modelo,
        versao: payload.versao,
      };
      state.meusCarros.splice(payload.index, 1, carroAtualizado);
    },
  },
  actions: {
    adicionarCarro: ({ commit }, payload) => {
      commit("ADICIONAR_CARRO", payload);
    },
    removerCarro: ({ commit }, payload) => {
      commit("REMOVER_CARRO", payload);
    },
    editarCarro: ({ commit }, payload) => {
      commit("EDITAR_CARRO", payload);
    },
  },
  getters: {
    meusCarros: (state) => state.meusCarros,
    marcas: (state) => state.marcas,

    modelos01: (state) => state.modelos01,
    modelos02: (state) => state.modelos02,

    versoesMa1Mo1: (state) => state.versoesMa1Mo1,
    versoesMa1Mo2: (state) => state.versoesMa1Mo2,

    versoesMa2Mo1: (state) => state.versoesMa2Mo1,
    versoesMa2Mo2: (state) => state.versoesMa2Mo2,
  },
  modules: {},
});
