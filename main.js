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

  let GroupA = [];
  let GroupB = [];
  let GroupC = [];
  let GroupD = [];
  let GroupE = [];
  let GroupF = [];
  let GroupG = [];
  let GroupH = [];

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
  let quarterFinalOne = [];
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

  GroupA.push(croacia, uruguai, gana, marrocos);
  GroupB.push(costa, arabia, canada, franca);
  GroupC.push(dinamarca, alemanha, australia, estados);
  GroupD.push(servia, coreia, belgica, iran);
  GroupE.push(senegal, polonia, holanda, portugal);
  GroupF.push(brasil, equador, paisde, qatar);
  GroupG.push(camaroes, espanha, tunisia, inglaterra);
  GroupH.push(argentina, mexico, suica, japao);

  allGroup.push(GroupA, GroupB, GroupC, GroupD, GroupE, GroupF, GroupG, GroupH);

  let showGroupTable = function (group) {
    for (let teams of Object.values(group)) {
      let {
        teamName: name,
        teamRange: range,
        wins: wins,
        draw: draw,
        derrota: derrota,
        golsFeitos: golsFeitos,
        golsSofridos: golsSofridos,
        pontos: pontos,
      } = teams;
      console.table(
        `${name} (${range})  ${wins} ${draw} ${derrota} ${golsFeitos}:${golsSofridos} ${pontos}`
      );
    }
  };

  let addTeamProperties = function (group) {
    return group.forEach(function (team) {
      team.wins = 0;
      team.draw = 0;
      team.derrota = 0;
      team.golsFeitos = 0;
      team.golsSofridos = 0;
      team.pontos = 0;
    });
  };
  
  let giveProperty = function (...allGroup) {
    allGroup.forEach((groups) => {
      groups.forEach((teams) => addTeamProperties(teams));
    });
  };
  giveProperty(allGroup);

  let goals = function (team1, team2, team3, team4) {
    team1.golsFeitos += teamOneScore;
    team1.golsSofridos += teamTwoScore;
    team2.golsFeitos += teamTwoScore;
    team2.golsSofridos += teamOneScore;

    team1.pontos = team1.wins;
    team2.pontos = team2.wins;

    team1.pontos *= 3;
    team2.pontos *= 3;

    if (team1.draw > 0) team1.pontos += team1.draw;
    if (team2.draw > 0) team2.pontos += team2.draw;

    team3.golsFeitos += teamThreeScore;
    team3.golsSofridos += teamFourScore;
    team4.golsFeitos += teamFourScore;
    team4.golsSofridos += teamThreeScore;

    team3.pontos = team3.wins;
    team4.pontos = team4.wins;

    team3.pontos *= 3;
    team4.pontos *= 3;

    if (team3.draw > 0) team3.pontos += team3.draw;
    if (team4.draw > 0) team4.pontos += team4.draw;
  };

  let game = function (team1, team2, team3, team4, group) {
    teamOneScore = Math.floor(Math.random() * 6);
    teamTwoScore = Math.floor(Math.random() * 6);
    teamThreeScore = Math.floor(Math.random() * 6);
    teamFourScore = Math.floor(Math.random() * 6);

    gameOne = `${team1.teamName} ${teamOneScore} : ${teamTwoScore} ${team2.teamName}`;
    gameTwo = `${team3.teamName} ${teamThreeScore} : ${teamFourScore} ${team4.teamName}`;

    if (teamOneScore > teamTwoScore) {
      team1.wins++;
      team2.derrota++;
    } else if (teamOneScore === teamTwoScore) {
      team1.draw++;
      team2.draw++;
    } else {
      team2.wins++;
      team1.derrota++;
    }
    if (teamThreeScore > teamFourScore) {
      team3.wins++;
      team4.derrota++;
    } else if (teamThreeScore === teamFourScore) {
      team3.draw++;
      team4.draw++;
    } else {
      team4.wins++;
      team3.derrota++;
    }
    goals(team1, team2, team3, team4);

    console.log(
      `Grupa ${group}:
       ${gameOne}
       ${gameTwo}`
    );
  };

  
  let grupPlayMatches = function ([...grupa], group) {
      game(...grupa, group);
  };

  console.log("Fase de grupos - I :");
  
  grupPlayMatches(GroupA, "A");
  grupPlayMatches(GroupB, "B");
  grupPlayMatches(GroupC, "C");
  grupPlayMatches(GroupD, "D");
  grupPlayMatches(GroupE, "E");
  grupPlayMatches(GroupF, "F");
  grupPlayMatches(GroupG, "G");
  grupPlayMatches(GroupH, "H");


  console.log("");
  console.log("Fase de grupos - II :");
  grupPlayMatches(GroupA, "A");
  grupPlayMatches(GroupB, "B");
  grupPlayMatches(GroupC, "C");
  grupPlayMatches(GroupD, "D");
  grupPlayMatches(GroupE, "E");
  grupPlayMatches(GroupF, "F");
  grupPlayMatches(GroupG, "G");
  grupPlayMatches(GroupH, "H");

  

  let sortGroups = function (group, grupa) {
    group.sort((a, b) => b.pontos - a.pontos);

    if (
      group[0].pontos === group[1].pontos ||
      group[2].pontos === group[3].pontos
    ) {
      group
        .sort((a, b) => a.golsSofridos - b.golsSofridos)
        .sort((a, b) => b.pontos - a.pontos);
    }
    console.log(grupa);

    showGroupTable(group);
  };

  let sliceTeam = function (team) {
    return team.slice(0, 2).map((el) => el.teamName);
  };

  console.log("");
  console.log("Fase de grupos - III :");

  grupPlayMatches(GroupA, "A");
  grupPlayMatches(GroupB, "B");
  grupPlayMatches(GroupC, "C");
  grupPlayMatches(GroupD, "D");
  grupPlayMatches(GroupE, "E");
  grupPlayMatches(GroupF, "F");
  grupPlayMatches(GroupG, "G");
  grupPlayMatches(GroupH, "H");

  console.log("");
  sortGroups(GroupA, "Grupa A tabela:");

  console.log("");
  sortGroups(GroupB, "Grupa B tabela:");

  console.log("");
  sortGroups(GroupC, "Grupa C tabela:");

  console.log("");
  sortGroups(GroupD, "Grupa D tabela:");

  console.log("");
  sortGroups(GroupE, "Grupa E tabela:");

  console.log("");
  sortGroups(GroupF, "Grupa F tabela:");

  console.log("");
  sortGroups(GroupG, "Grupa G tabela:");

  console.log("");
  sortGroups(GroupH, "Grupa H tabela:");

  groupA = sliceTeam(GroupA);
  groupB = sliceTeam(GroupB);
  groupC = sliceTeam(GroupC);
  groupD = sliceTeam(GroupD);
  groupE = sliceTeam(GroupE);
  groupF = sliceTeam(GroupF);
  groupG = sliceTeam(GroupG);
  groupH = sliceTeam(GroupH);

  let overtime = function (
    teamOneScore,
    teamTwoScore,
    team1,
    team2,
    eliminationGroup
  ) {
    equalScoreTeamOne = Math.floor(Math.random() * 7);
    equalScoreTeamTwo = Math.floor(Math.random() * 6);
    penalsTeamOne = Math.floor(Math.random() * 6);
    penalsTeamTwo = Math.floor(Math.random() * 6);

    gameOne = `${team1} ${teamOneScore} : ${teamTwoScore} ${team2}`;

    if (teamOneScore === teamTwoScore) {
      `${team1} ${(teamOneScore += equalScoreTeamOne)} : ${(teamTwoScore +=
        equalScoreTeamTwo)} ${team2}`;
      console.log("Empate");

      if (teamOneScore > teamTwoScore) {
        eliminationGroup.push(team1);
        console.log(`${team1} ${teamOneScore} : ${teamTwoScore} ${team2}`);
      } else if (teamOneScore < teamTwoScore) {
        eliminationGroup.push(team2);
        console.log(`  ${team1} ${teamOneScore} : ${teamTwoScore} ${team2}`);
      } else {
        console.log("Pênaltis:") &&
          `${team1} ${(teamOneScore += penalsTeamOne)} : ${(teamTwoScore +=
            penalsTeamTwo)} ${team2}` &&
          eliminationGroup.push(team2) &&
          console.log(gameOne);
      }
    }
  };

  let eliminationGame = function (
    team1,
    team2,
    team3,
    team4,
    eliminationGroup
  ) {
    equalScoreTeamOne = Math.floor(Math.random() * 7);
    equalScoreTeamTwo = Math.floor(Math.random() * 7);

    teamOneScore = Math.floor(Math.random() * 6);
    teamTwoScore = Math.floor(Math.random() * 6);
    teamThreeScore = Math.floor(Math.random() * 6);
    teamFourScore = Math.floor(Math.random() * 6);

    gameOne = `${team1} ${teamOneScore} : ${teamTwoScore} ${team2}`;
    gameTwo = `${team3} ${teamThreeScore} : ${teamFourScore} ${team4}`;

    teamOneScore > teamTwoScore && eliminationGroup.push(team1);
    teamOneScore < teamTwoScore && eliminationGroup.push(team2);
    teamThreeScore > teamFourScore && eliminationGroup.push(team3);
    teamThreeScore < teamFourScore && eliminationGroup.push(team4);

    console.log(gameOne);
    console.log(gameTwo);

    overtime(teamOneScore, teamTwoScore, team1, team2, eliminationGroup);
    overtime(teamThreeScore, teamFourScore, team3, team4, eliminationGroup);
  };

  console.log("");
  console.log("Fase Eliminatória - Oitavas de Final:");

  eliminationGame(
    groupA[0],
    groupB[1],
    groupA[1],
    groupB[0],
    eliminationGroupOne
  );

  eliminationGame(
    groupC[0],
    groupD[1],
    groupC[1],
    groupD[0],
    eliminationGroupOne
  );

  eliminationGame(
    groupE[0],
    groupF[1],
    groupE[1],
    groupF[0],
    eliminationGroupTwo
  );
  eliminationGame(
    groupG[0],
    groupH[1],
    groupG[1],
    groupH[0],
    eliminationGroupTwo
  );

  console.log("");
  console.log("Fase Eliminatória - Quartas de final:");

  eliminationGame(
    eliminationGroupOne[0],
    eliminationGroupOne[1],
    eliminationGroupOne[2],
    eliminationGroupOne[3],
    quarterFinalOne
  );
  eliminationGame(
    eliminationGroupTwo[0],
    eliminationGroupTwo[1],
    eliminationGroupTwo[2],
    eliminationGroupTwo[3],
    quaterFinalTwo
  );

  console.log("");
  console.log("Fase Eliminatória - Semifinal:");

  eliminationGame(
    quarterFinalOne[0],
    quarterFinalOne[1],
    quaterFinalTwo[0],
    quaterFinalTwo[1],
    finalGameTeams
  );

  let finalGame = function (team1, team2, eliminationGroup) {
    equalScoreTeamOne = Math.floor(Math.random() * 7);
    equalScoreTeamTwo = Math.floor(Math.random() * 7);

    teamOneScore = Math.floor(Math.random() * 6);
    teamTwoScore = Math.floor(Math.random() * 6);

    gameOne = `${team1} ${teamOneScore} : ${teamTwoScore} ${team2}`;

    teamOneScore > teamTwoScore && eliminationGroup.push(team1);
    teamOneScore < teamTwoScore && eliminationGroup.push(team2);

    console.log(gameOne);
    overtime(teamOneScore, teamTwoScore, team1, team2, eliminationGroup);
  };

  console.log("");
  console.log("Final:");

  finalGame(finalGameTeams[0], finalGameTeams[1], winner);

  console.log("");


  let showWinner = function (winner) {
    console.log(`!!! ${winner} !!!`);
  };
  showWinner(winner);
};

main();