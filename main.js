"use strict";

const main = () => {
  let teamOneScore;
  let teamTwoScore;
  let teamThreeScore;
  let teamFourScore;
  let equalScoreTeamOne;
  let equalScoreTeamTwo;
  let penalsTeamOne;
  let penalsTeamTwo;

  let GrupaA = [];
  let GrupaB = [];
  let GrupaC = [];
  let GrupaD = [];
  let GrupaE = [];
  let GrupaF = [];
  let GrupaG = [];
  let GrupaH = [];

  const allGroup = [];

  // ELIMINATION GROUPS

  let groupA = [];
  let groupB = [];
  let groupC = [];
  let groupD = [];
  let groupE = [];
  let groupF = [];
  let groupG = [];
  let groupH = [];

  let eliminationGroupOne = [];
  let eliminationGroupTwo = [];
  let quaterFinalOne = [];
  let quaterFinalTwo = [];
  let finalGameTeams = [];
  let winner = [];

  let gameOne;
  let gameTwo;

  let croacia = { teamName: "Croacia", teamRange: 51 };
  let uruguai = { teamName: "Uruguai", teamRange: 33 };
  let gana = { teamName: "Gana", teamRange: 24 };
  let marrocos = { teamName: "Marrocos", teamRange: 20 };
  let costa = { teamName: "Costa Rica", teamRange: 5 };
  let arabia = { teamName: "Arábia Saudita", teamRange: 29 };
  let canada = { teamName: "Canadá", teamRange: 15 };
  let franca = { teamName: "França", teamRange: 27 };
  let dinamarca = { teamName: "Dinamarca", teamRange: 4 };
  let alemanha = { teamName: "Alemanha", teamRange: 49 };
  let australia = { teamName: "Austrália", teamRange: 9 };
  let estados = { teamName: "Estados Unidos", teamRange: 17 };
  let servia = { teamName: "Sérvia", teamRange: 3 };
  let coreia = { teamName: "Coreia do Sul", teamRange: 18 };
  let belgica = { teamName: "Belgica", teamRange: 11 };
  let iran = { teamName: "Iran", teamRange: 25 };
  let senegal = { teamName: "Senegal", teamRange: 7 };
  let polonia = { teamName: "Polônia", teamRange: 27 };
  let holanda = { teamName: "Holanda", teamRange: 12 };
  let portugal = { teamName: "Portugal", teamRange: 23 };
  let brasil = { teamName: "Brasil", teamRange: 2 };
  let equador = { teamName: "Equador", teamRange: 38 };
  let paisde = { teamName: "País de Gales", teamRange: 31 };
  let qatar = { teamName: "Qatar", teamRange: 16 };
  let camaroes = { teamName: "Camarões", teamRange: 1 };
  let espanha = { teamName: "Espanha", teamRange: 25 };
  let tunisia = { teamName: "Tunísia", teamRange: 14 };
  let inglaterra = { teamName: "Inglaterra", teamRange: 37 };
  let argentina = { teamName: "Argentina", teamRange: 8 };
  let mexico = { teamName: "Mexico", teamRange: 29 };
  let suica = { teamName: "Suiça", teamRange: 13 };
  let japao = { teamName: "Japão", teamRange: 26 };

  GrupaA.push(croacia, uruguai, gana, marrocos);
  GrupaB.push(costa, arabia, canada, franca);
  GrupaC.push(dinamarca, alemanha, australia, estados);
  GrupaD.push(servia, coreia, belgica, iran);
  GrupaE.push(senegal, polonia, holanda, portugal);
  GrupaF.push(brasil, equador, paisde, qatar);
  GrupaG.push(camaroes, espanha, tunisia, inglaterra);
  GrupaH.push(argentina, mexico, suica, japao);

  allGroup.push(GrupaA, GrupaB, GrupaC, GrupaD, GrupaE, GrupaF, GrupaG, GrupaH);

  