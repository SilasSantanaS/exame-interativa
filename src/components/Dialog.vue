<template>
  <span justify="center">
    <v-dialog v-model="dialog" persistent max-width="400px" height="200px;">
      <template v-slot:activator="{ on }">
        <v-btn color="primary" dark v-on="on">Editar</v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">EDITAR AUTOMÓVEL</span>
        </v-card-title>
        <v-card-text>
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
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="error darken-1" text @click="dialog = false">Fechar</v-btn>
          <v-btn color="blue darken-1" text @click="editarCarroHandler">Salvar alterações</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </span>
</template>

<script>
import { mapGetters } from "vuex";
import { mapActions } from "vuex";

export default {
  props: {
    marcaSelecionada: {
      type: String
    },
    modeloSelecionado: {
      type: String
    },
    versaoSelecionada: {
      type: String
    },
    index: {
      type: Number
    }
  },
  data: () => ({
    dialog: false
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
    ...mapActions(["editarCarro"]),
    editarCarroHandler() {
      this.editarCarro({
        marca: this.marcaSelecionada,
        modelo: this.modeloSelecionado,
        versao: this.versaoSelecionada,
        index: this.index
      });
      this.dialog = false;
    }
  }
};
</script>