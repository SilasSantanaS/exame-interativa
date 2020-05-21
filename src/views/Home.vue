<template>
  <div class="home">
    <div class="row mt-5">
      <!-- Cadastrar automóvel  -->
      <div class="col col-md-4">
        <div class="headline mx-5">CADASTRAR AUTOMÓVEL</div>

        <!-- Form -->
        <div class="class pa-5">
          <!-- Form - Marca -->
          <div class="row">
            <div class="col-md-12">
              <v-select v-model="marcaSelecionada" :items="marcas" label="Marca" outlined></v-select>
            </div>
          </div>

          <!-- Form - Modelo -->
          <div class="row">
            <div class="col-md-12">
              <v-select
                v-model="modeloSelecionado"
                :items="marcaSelecionada == 'Marca 01' ? modelos01 : modelos02"
                label="Modelo"
                outlined
              ></v-select>
            </div>
          </div>

          <!-- Form - Versão -->

          <!-- Form - Versão Marca 01-->
          <div class="row" v-if="marcaSelecionada == 'Marca 01' ">
            <div class="col-md-12">
              <v-select
                v-model="versaoSelecionada"
                :items="marcaSelecionada == 'Marca 01' && modeloSelecionado == 'Modelo 01 - Ma 01' ? versoesMa1Mo1 :  versoesMa1Mo2"
                label="Versão"
                outlined
              ></v-select>
            </div>
          </div>

          <!-- Form - Versão Marca 02-->
          <div class="row" v-if="marcaSelecionada == 'Marca 02' || marcaSelecionada == ''">
            <div class="col-md-12">
              <v-select
                v-model="versaoSelecionada"
                :items="marcaSelecionada == 'Marca 02' && modeloSelecionado == 'Modelo 01 - Ma 02' ? versoesMa2Mo1 :  versoesMa2Mo2"
                label="Versão"
                outlined
              ></v-select>
            </div>
          </div>
        </div>

        <!-- Botao adicionar automóvel -->
        <div class="row mx-5">
          <v-btn
            dark
            @click="adicionarCarro({ marcaSelecionada, modeloSelecionado, versaoSelecionada })"
          >Adicionar automóvel</v-btn>
        </div>
      </div>

      <!-- Automóveis cadastrados  -->
      <div class="col col-md-8">
        <div class="row">
          <div class="col col-md-12">
            <div class="headline">AUTOMÓVEIS CADASTRADOS</div>
          </div>

          <!-- Lista de carros cadastrados  -->
          <div
            class="col col-md-12 mt-2 blue-grey lighten-5"
            v-for="(item, index) in meusCarros"
            :key="item.marca"
          >
            <div>
              <!-- Marca  -->
              <span class="mr-5">
                <span class="font-weight-bold">Marca:</span>
                {{ item.marca }}
              </span>

              <!-- Modelo  -->
              <span class="mr-5">
                <span class="font-weight-bold">Modelo:</span>
                {{ item.modelo }}
              </span>

              <!-- Versão  -->
              <span class="mr-5">
                <span class="font-weight-bold">Versão:</span>
                {{ item.versao }}
              </span>
              <!-- Botões de editar e deletar  -->
              <span>
                <app-dialog
                  :marcaSelecionada="marcaSelecionada"
                  :modeloSelecionado="modeloSelecionado"
                  :versaoSelecionada="versaoSelecionada"
                  :index="index"
                ></app-dialog>
                <v-btn class="ml-2" dark @click="removerCarro({index})">Deletar</v-btn>
              </span>
            </div>
          </div>
        </div>
      </div>
      <!--<h1>{{ marcaSelecionada }}</h1>
      <h1>{{ modeloSelecionado }}</h1>
      <h1>{{ versaoSelecionada }}</h1>-->
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { mapActions } from "vuex";

import Dialog from "../components/Dialog";

export default {
  components: {
    appDialog: Dialog
  },
  data: () => ({
    items: ["Marca 01", "Marca 02", "Marca 03", "Marca 04"],
    versoes: ["Versao 01", "Versao 02", "Versao 03", "Versao 04"],
    marcaSelecionada: "",
    modeloSelecionado: "",
    versaoSelecionada: ""
  }),
  computed: {
    ...mapGetters([
      "meusCarros",
      "marcas",
      "modelos01",
      "modelos02",
      "versoesMa1Mo1",
      "versoesMa1Mo2",
      "versoesMa2Mo1",
      "versoesMa2Mo2"
    ])
  },
  methods: {
    ...mapActions(["adicionarCarro", "removerCarro"])
  }
};
</script>
