global.jQuery = require('jquery');
import $ from 'jquery';
import 'bootstrap';
// PELO AMOR DE DEUS NAO MEXA NISSO OBRIGADO

import {efeito} from './setaEfeitoLogin';

import {animacaoBotaoAdicionar} from './alunoAnimacoes';

import {capsLock, validaEmail, validaSenha, textoRecuperarSenha, 
    habilitaBotoes, mudaParaTelaDeRegistro, timeAlerta, verificaCargo} from './TelaLoginAnimacoes';


capsLock();
validaEmail("#userEmail");
validaSenha("#userPassword");

validaEmail("#recuperarEmail");

validaEmail("#userEmailRegister");
validaSenha("#userPasswordRegister");


textoRecuperarSenha();
habilitaBotoes("#recuperarEmail","#recuperarSenhaBtn");
habilitaBotoes("#userPassword",".loginBtn");

habilitaBotoes("#userPasswordRegister",".registerBtn");
mudaParaTelaDeRegistro();
verificaCargo();

timeAlerta();



// EFEITOS RELACIONADOS A TELAS MORTAS 
// efeito();
// animacaoBotaoAdicionar();





