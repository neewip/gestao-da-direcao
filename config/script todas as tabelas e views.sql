
CREATE TABLE AlunosGeral(
	RM varchar NOT NULL,
	NomeAluno varchar(255) NULL,
	Turma varchar(255) NULL,
	Ano varchar NOT NULL,
    PRIMARY KEY (RM)
);

CREATE TABLE AvaliaExt (
	rm varchar NOT NULL,
	etapa varchar NOT NULL,
	ano varchar NOT NULL,
	tipoprova varchar(255) NOT NULL,
	notaExt varchar NULL,
	PRIMARY KEY(rm, etapa, ano, tipoprova),
	FOREIGN KEY (rm) REFERENCES AlunosGeral (RM)

);

CREATE TABLE AvaliaSESI(
	rm varchar NOT NULL,
	Ebep varchar(255) NULL,
	ComDeficiencia varchar(255) NULL,
	Turma varchar(255) NULL,
	PorcentagemAcertoIngles varchar NULL,
	"1S-CH" varchar(255) NULL,
	"1S-CN" varchar(255) NULL,
	"1S-LI" varchar(255) NULL,
	"1S-LP" varchar(255) NULL,
	"1S-MAT" varchar(255) NULL,
	"2S-CH" varchar(255) NULL,
	"2S-CN" varchar(255) NULL,
	"2S-LI" varchar(255) NULL,
	"2S-LP" varchar(255) NULL,
	"2S-MAT" varchar(255) NULL,
	"3S-CH" varchar(255) NULL,
	"3S-CN" varchar(255) NULL,
	"3S-LI" varchar(255) NULL,
	"3S-LP" varchar(255) NULL,
	"3S-MAT" varchar(255) NULL,
PRIMARY KEY (rm),
FOREIGN KEY (rm) REFERENCES AlunosGeral(RM)
);


CREATE TABLE CursoTec(
	rm varchar NOT NULL,
	frequencia varchar (255) NULL,
	notaCT varchar(255) NULL,
	ano varchar (255) NULL,
	etapa varchar (255) NULL,
	PRIMARY KEY(rm),
	FOREIGN KEY (rm) REFERENCES AlunosGeral (RM)
);

CREATE TABLE NotasEF1 (
    RM varchar NOT NULL,
    "1EtapaCN" varchar(255) NULL,
    "2EtapaCN" varchar(255) NULL,
    "3EtapaCN" varchar(255) NULL,
    "NotaFinalCN" varchar(255) NULL,
    "1EtapaMAT" varchar(255) NULL,
    "2EtapaMAT" varchar(255) NULL,
    "3EtapaMAT" varchar(255) NULL,
    "NotaFinalMAT" varchar(255) NULL,
    "1EtapaLP" varchar(255) NULL,
    "2EtapaLP" varchar(255) NULL,
    "3EtapaLP" varchar(255) NULL,
    "NotaFinalLP" varchar(255) NULL,
    "1EtapaAR" varchar(255) NULL,
    "2EtapaAR" varchar(255) NULL,
    "3EtapaAR" varchar(255) NULL,
    "NotaFinalAR" varchar(255) NULL,
    "1EtapaEF" varchar NULL,
    "2EtapaEF" varchar NULL,
    "3EtapaEF" varchar(255) NULL,
    "NotaFinalEF" varchar(255) NULL,
    "1EtapaCH" varchar NULL,
    "2EtapaCH" varchar NULL,
    "3EtapaCH" varchar(255) NULL,
    "NotaFinalCH" varchar(255) NULL,
    "1EtapaCCE" varchar NULL,
    "2EtapaCCE" varchar NULL,
    "3EtapaCCE" varchar(255) NULL,
    "NotaFinalCCE" varchar(255) NULL,
    "1EtapaLI" varchar NULL,
    "2EtapaLI" varchar NULL,
    "3EtapaLI" varchar(255) NULL,
    "NotaFinalLI" varchar(255) NULL,
    "1EtapaPF" varchar NULL,
    "2EtapaPF" varchar NULL,
    "3EtapaPF" varchar(255) NULL,
    "NotaFinalPF" varchar(255) NULL,
    "1EtapaROB" varchar NULL,
    "2EtapaROB" varchar NULL,
    "3EtapaROB" varchar NULL,
    "NotaFinalROB" varchar NULL,
    "1EtapaPR" varchar NULL,
    "2EtapaPR" varchar NULL,
    "3EtapaPR" varchar(255) NULL,
    "NotaFinalPR" varchar(255) NULL,
    "1EtapaPSC" varchar(255) NULL,
    "2EtapaPSC" varchar(255) NULL,
    "3EtapaPSC" varchar(255) NULL,
    "NotaFinalPSC" varchar(255) NULL,
    PRIMARY KEY(RM),
    FOREIGN KEY (RM) REFERENCES AlunosGeral (RM)
);

CREATE TABLE NotasEF2(
    RM varchar NOT NULL,
    "1EtapaCN" varchar(255) NULL,
    "2EtapaCN" varchar(255) NULL,
    "3EtapaCN" varchar(255) NULL,
    "NotaFinalCN" varchar(255) NULL,
    "1EtapaMAT" varchar(255) NULL,
    "2EtapaMAT" varchar(255) NULL,
    "3EtapaMAT" varchar(255) NULL,
    "NotaFinalMAT" varchar(255) NULL,
    "1EtapaLP" varchar(255) NULL,
    "2EtapaLP" varchar(255) NULL,
    "3EtapaLP" varchar(255) NULL,
    "NotaFinalLP" varchar(255) NULL,
    "1EtapaAR" varchar(255) NULL,
    "2EtapaAR" varchar(255) NULL,
    "3EtapaAR" varchar(255) NULL,
    "NotaFinalAR" varchar(255) NULL,
    "1EtapaEF" varchar(255) NULL,
    "2EtapaEF" varchar(255) NULL,
    "3EtapaEF" varchar(255) NULL,
    "NotaFinalEF" varchar(255) NULL,
    "1EtapaHIS" varchar(255) NULL,
    "2EtapaHIS" varchar(255) NULL,
    "3EtapaHIS" varchar(255) NULL,
    "NotaFinalHIS" varchar(255) NULL,
    "1EtapaGEO" varchar(255) NULL,
    "2EtapaGEO" varchar(255) NULL,
    "3EtapaGEO" varchar(255) NULL,
    "NotaFinalGEO" varchar(255) NULL,
    "1EtapaLI" varchar(255) NULL,
    "2EtapaLI" varchar(255) NULL,
    "3EtapaLI" varchar(255) NULL,
    "NotaFinalLI" varchar(255) NULL,
    "1EtapaEIXO" varchar(255) NULL,
    "2EtapaEIXO" varchar(255) NULL,
    "3EtapaEIXO" varchar(255) NULL,
    "NotaFinalEIXO" varchar(255) NULL,
    "1EtapaPR" varchar(255) NULL,
    "2EtapaPR" varchar(255) NULL,
    "3EtapaPR" varchar(255) NULL,
    "NotaFinalPR" varchar(255) NULL,
    PRIMARY KEY(RM),
    FOREIGN KEY (RM) REFERENCES AlunosGeral (RM)
);

CREATE TABLE NotasEM (
    RM varchar NOT NULL,
    "1EtapaBIO" varchar(255) NULL,
    "2EtapaBIO" varchar(255) NULL,
    "3EtapaBIO" varchar(255) NULL,
    "NotaFinalBIO" varchar NULL,
    "1EtapaFIS" varchar(255) NULL,
    "2EtapaFIS" varchar(255) NULL,
    "3EtapaFIS" varchar(255) NULL,
    "NotaFinalFIS" varchar NULL,
    "1EtapaQUI" varchar(255) NULL,
    "2EtapaQUI" varchar(255) NULL,
    "3EtapaQUI" varchar(255) NULL,
    "NotaFinalQUI" varchar NULL,
    "1EtapaMA" varchar(255) NULL,
    "2EtapaMA" varchar(255) NULL,
    "3EtapaMA" varchar(255) NULL,
    "NotaFinalMA" varchar NULL,
    "1EtapaLP" varchar(255) NULL,
    "2EtapaLP" varchar(255) NULL,
    "3EtapaLP" varchar(255) NULL,
    "NotaFinalLP" varchar NULL,
    "1EtapaAR" varchar(255) NULL,
    "2EtapaAR" varchar(255) NULL,
    "3EtapaAR" varchar(255) NULL,
    "NotaFinalAR" varchar NULL,
    "1EtapaEF" varchar(255) NULL,
    "2EtapaEF" varchar(255) NULL,
    "3EtapaEF" varchar(255) NULL,
    "NotaFinalEF" varchar NULL,
    "1EtapaLI" varchar(255) NULL,
    "2EtapaLI" varchar(255) NULL,
    "3EtapaLI" varchar(255) NULL,
    "NotaFinalLI" varchar NULL,
    "1EtapaHI" varchar(255) NULL,
    "2EtapaHI" varchar(255) NULL,
    "3EtapaHI" varchar(255) NULL,
    "NotaFinalHI" varchar NULL,
    "1EtapaGE" varchar(255) NULL,
    "2EtapaGE" varchar(255) NULL,
    "3EtapaGE" varchar(255) NULL,
    "NotaFinalGE" varchar NULL,
    "1EtapaSOC" varchar(255) NULL,
    "2EtapaSOC" varchar(255) NULL,
    "3EtapaSOC" varchar(255) NULL,
    "NotaFinalSOC" varchar NULL,
    "1EtapaFIL" varchar(255) NULL,
    "2EtapaFIL" varchar(255) NULL,
    "3EtapaFIL" varchar(255) NULL,
    "NotaFinalFIL" varchar NULL,
    PRIMARY KEY(RM),
    FOREIGN KEY (RM) REFERENCES AlunosGeral (RM)
);

create view AvaliaExtFilter as
select ex.*, al.Turma, al.NomeAluno from 
AlunosGeral as al
inner join 
AvaliaExt as ex on ex.rm = al.RM


CREATE VIEW AvaliaSESIFilter
AS
SELECT   al.NomeAluno, al.turma, avsesi.*, al.Ano
FROM     AvaliaSESI AS avsesi INNER JOIN
                  AlunosGeral AS al ON avsesi.rm = al.RM

CREATE VIEW CursoTecFilter
AS
SELECT ct.rm, ct.frequencia, ct.notaCT, ct.ano, ct.etapa, al.Turma, al.NomeAluno
FROM     AlunosGeral AS al INNER JOIN
                  CursoTec AS ct ON ct.rm = al.RM


CREATE VIEW NotasEF1Filter AS
SELECT 
    n1.RM, 
    n1."1EtapaCN" AS "1EtapaCN", 
    n1."2EtapaCN" AS "2EtapaCN", 
    n1."3EtapaCN" AS "3EtapaCN", 
    n1."NotaFinalCN" AS "NotaFinalCN", 
    n1."1EtapaMAT" AS "1EtapaMAT", 
    n1."2EtapaMAT" AS "2EtapaMAT", 
    n1."3EtapaMAT" AS "3EtapaMAT", 
    n1."NotaFinalMAT" AS "NotaFinalMAT", 
    n1."1EtapaLP" AS "1EtapaLP", 
    n1."2EtapaLP" AS "2EtapaLP", 
    n1."3EtapaLP" AS "3EtapaLP", 
    n1."NotaFinalLP" AS "NotaFinalLP", 
    n1."1EtapaAR" AS "1EtapaAR", 
    n1."2EtapaAR" AS "2EtapaAR", 
    n1."3EtapaAR" AS "3EtapaAR", 
    n1."NotaFinalAR" AS "NotaFinalAR", 
    n1."1EtapaEF" AS "1EtapaEF", 
    n1."2EtapaEF" AS "2EtapaEF", 
    n1."3EtapaEF" AS "3EtapaEF", 
    n1."NotaFinalEF" AS "NotaFinalEF", 
    n1."1EtapaCH" AS "1EtapaCH", 
    n1."2EtapaCH" AS "2EtapaCH", 
    n1."3EtapaCH" AS "3EtapaCH", 
    n1."NotaFinalCH" AS "NotaFinalCH", 
    n1."1EtapaCCE" AS "1EtapaCCE", 
    n1."2EtapaCCE" AS "2EtapaCCE", 
    n1."3EtapaCCE" AS "3EtapaCCE", 
    n1."NotaFinalCCE" AS "NotaFinalCCE", 
    n1."1EtapaLI" AS "1EtapaLI", 
    n1."2EtapaLI" AS "2EtapaLI", 
    n1."3EtapaLI" AS "3EtapaLI", 
    n1."NotaFinalLI" AS "NotaFinalLI", 
    n1."1EtapaPF" AS "1EtapaPF", 
    n1."2EtapaPF" AS "2EtapaPF", 
    n1."3EtapaPF" AS "3EtapaPF", 
    n1."NotaFinalPF" AS "NotaFinalPF", 
    n1."1EtapaROB" AS "1EtapaROB", 
    n1."2EtapaROB" AS "2EtapaROB", 
    n1."3EtapaROB" AS "3EtapaROB", 
    n1."NotaFinalROB" AS "NotaFinalROB", 
    n1."1EtapaPR" AS "1EtapaPR", 
    n1."2EtapaPR" AS "2EtapaPR", 
    n1."3EtapaPR" AS "3EtapaPR", 
    n1."NotaFinalPR" AS "NotaFinalPR", 
    n1."1EtapaPSC" AS "1EtapaPSC", 
    n1."2EtapaPSC" AS "2EtapaPSC", 
    n1."3EtapaPSC" AS "3EtapaPSC", 
    n1."NotaFinalPSC" AS "NotaFinalPSC", 
    al.Turma, 
    al.Ano, 
    al.NomeAluno
FROM 
    AlunosGeral AS al 
INNER JOIN 
    NotasEF1 AS n1 ON n1.RM = al.RM;


CREATE VIEW NotasEF2Filter AS
SELECT 
    n2.RM, 
	  al.Turma, 
    al.Ano, 
    al.NomeAluno,
    n2."1EtapaCN" AS "1EtapaCN", 
    n2."2EtapaCN" AS "2EtapaCN", 
    n2."3EtapaCN" AS "3EtapaCN", 
    n2."NotaFinalCN" AS "NotaFinalCN", 
    n2."1EtapaMAT" AS "1EtapaMAT", 
    n2."2EtapaMAT" AS "2EtapaMAT", 
    n2."3EtapaMAT" AS "3EtapaMAT", 
    n2."NotaFinalMAT" AS "NotaFinalMAT", 
    n2."1EtapaLP" AS "1EtapaLP", 
    n2."2EtapaLP" AS "2EtapaLP", 
    n2."3EtapaLP" AS "3EtapaLP", 
    n2."NotaFinalLP" AS "NotaFinalLP", 
    n2."1EtapaAR" AS "1EtapaAR", 
    n2."2EtapaAR" AS "2EtapaAR", 
    n2."3EtapaAR" AS "3EtapaAR", 
    n2."NotaFinalAR" AS "NotaFinalAR", 
    n2."1EtapaEF" AS "1EtapaEF", 
    n2."2EtapaEF" AS "2EtapaEF", 
    n2."3EtapaEF" AS "3EtapaEF", 
    n2."NotaFinalEF" AS "NotaFinalEF", 
    n2."1EtapaHIS" AS "1EtapaHIS", 
    n2."2EtapaHIS" AS "2EtapaHIS", 
    n2."3EtapaHIS" AS "3EtapaHIS", 
    n2."NotaFinalHIS" AS "NotaFinalHIS", 
    n2."1EtapaGEO" AS "1EtapaGEO", 
    n2."2EtapaGEO" AS "2EtapaGEO", 
    n2."3EtapaGEO" AS "3EtapaGEO", 
    n2."NotaFinalGEO" AS "NotaFinalGEO", 
    n2."1EtapaLI" AS "1EtapaLI", 
    n2."2EtapaLI" AS "2EtapaLI", 
    n2."3EtapaLI" AS "3EtapaLI", 
    n2."NotaFinalLI" AS "NotaFinalLI", 
    n2."1EtapaEIXO" AS "1EtapaEIXO", 
    n2."2EtapaEIXO" AS "2EtapaEIXO", 
    n2."3EtapaEIXO" AS "3EtapaEIXO", 
    n2."NotaFinalEIXO" AS "NotaFinalEIXO", 
    n2."1EtapaPR" AS "1EtapaPR", 
    n2."2EtapaPR" AS "2EtapaPR", 
    n2."3EtapaPR" AS "3EtapaPR", 
    n2."NotaFinalPR" AS "NotaFinalPR"
  
FROM 
    AlunosGeral AS al 
INNER JOIN 
    NotasEF2 AS n2 ON n2.RM = al.RM;

	CREATE VIEW NotasEMFilter AS
SELECT 
    nm.RM, 
	al.Turma, 
    al.Ano, 
    al.NomeAluno,
    nm."1EtapaBIO" AS "1EtapaBIO", 
    nm."2EtapaBIO" AS "2EtapaBIO", 
    nm."3EtapaBIO" AS "3EtapaBIO", 
    nm."NotaFinalBIO" AS "NotaFinalBIO", 
    nm."1EtapaFIS" AS "1EtapaFIS", 
    nm."2EtapaFIS" AS "2EtapaFIS", 
    nm."3EtapaFIS" AS "3EtapaFIS", 
    nm."NotaFinalFIS" AS "NotaFinalFIS", 
    nm."1EtapaQUI" AS "1EtapaQUI", 
    nm."2EtapaQUI" AS "2EtapaQUI", 
    nm."3EtapaQUI" AS "3EtapaQUI", 
    nm."NotaFinalQUI" AS "NotaFinalQUI", 
    nm."1EtapaMA" AS "1EtapaMA", 
    nm."2EtapaMA" AS "2EtapaMA", 
    nm."3EtapaMA" AS "3EtapaMA", 
    nm."NotaFinalMA" AS "NotaFinalMA", 
    nm."1EtapaLP" AS "1EtapaLP", 
    nm."2EtapaLP" AS "2EtapaLP", 
    nm."3EtapaLP" AS "3EtapaLP", 
    nm."NotaFinalLP" AS "NotaFinalLP", 
    nm."1EtapaAR" AS "1EtapaAR", 
    nm."2EtapaAR" AS "2EtapaAR", 
    nm."3EtapaAR" AS "3EtapaAR", 
    nm."NotaFinalAR" AS "NotaFinalAR", 
    nm."1EtapaEF" AS "1EtapaEF", 
    nm."2EtapaEF" AS "2EtapaEF", 
    nm."3EtapaEF" AS "3EtapaEF", 
    nm."NotaFinalEF" AS "NotaFinalEF", 
    nm."1EtapaLI" AS "1EtapaLI", 
    nm."2EtapaLI" AS "2EtapaLI", 
    nm."3EtapaLI" AS "3EtapaLI", 
    nm."NotaFinalLI" AS "NotaFinalLI", 
    nm."1EtapaHI" AS "1EtapaHI", 
    nm."2EtapaHI" AS "2EtapaHI", 
    nm."3EtapaHI" AS "3EtapaHI", 
    nm."NotaFinalHI" AS "NotaFinalHI", 
    nm."1EtapaGE" AS "1EtapaGE", 
    nm."2EtapaGE" AS "2EtapaGE", 
    nm."3EtapaGE" AS "3EtapaGE", 
    nm."NotaFinalGE" AS "NotaFinalGE", 
    nm."1EtapaSOC" AS "1EtapaSOC", 
    nm."2EtapaSOC" AS "2EtapaSOC", 
    nm."3EtapaSOC" AS "3EtapaSOC", 
    nm."NotaFinalSOC" AS "NotaFinalSOC", 
    nm."1EtapaFIL" AS "1EtapaFIL", 
    nm."2EtapaFIL" AS "2EtapaFIL", 
    nm."3EtapaFIL" AS "3EtapaFIL", 
    nm."NotaFinalFIL" AS "NotaFinalFIL"
FROM 
    AlunosGeral AS al 
INNER JOIN 
    NotasEM AS nm ON nm.RM = al.RM;


CREATE VIEW TabelaGeralEFDOIS AS
SELECT 
    Al.NomeAluno, 
    Al.RM, 
    AvInterna."NotaFinalCN",  -- Ajuste aqui se o nome da coluna estiver diferente
    AvInterna."NotaFinalMAT", 
    AvInterna."NotaFinalLP", 
    AvInterna."NotaFinalAR", 
    AvInterna."NotaFinalEF", 
    AvInterna."NotaFinalHIS", 
    AvInterna."NotaFinalGEO", 
    AvInterna."NotaFinalEIXO", 
    AvInterna."NotaFinalLI", 
    AvInterna."NotaFinalPR", 
    AvSESI.ComDeficiencia, 
    AvSESI."1S-CH", 
    AvSESI."1S-CN", 
    AvSESI."1S-LI", 
    AvSESI."1S-LP", 
    AvSESI."1S-MAT", 
    AvSESI."2S-CH", 
    AvSESI."2S-CN", 
    AvSESI."2S-LI", 
    AvSESI."2S-LP", 
    AvSESI."2S-MAT", 
    AvSESI."3S-CH", 
    AvSESI."3S-CN", 
    AvSESI."3S-LI", 
    AvSESI."3S-LP", 
    AvSESI."3S-MAT", 
    Al.Ano, 
    Al.Turma
FROM 
    AlunosGeral AS Al 
INNER JOIN 
    NotasEF2 AS AvInterna ON Al.RM = AvInterna.RM 
INNER JOIN 
    AvaliaSESI AS AvSESI ON Al.RM = AvSESI.rm;


CREATE VIEW TabelaGeralEFUM AS
SELECT 
    Al.NomeAluno, 
    Al.RM, 
    AvInterna."NotaFinalCN", 
    AvInterna."NotaFinalMAT", 
    AvInterna."NotaFinalLP", 
    AvInterna."NotaFinalAR", 
    AvInterna."NotaFinalEF", 
    AvInterna."NotaFinalCH", 
    AvInterna."NotaFinalCCE", 
    AvInterna."NotaFinalLI", 
    AvInterna."NotaFinalPF", 
    AvInterna."NotaFinalROB", 
    AvInterna."NotaFinalPR", 
    AvInterna."NotaFinalPSC", 
    AvSESI.ComDeficiencia, 
    AvSESI."1S-CH", 
    AvSESI."1S-CN", 
    AvSESI."1S-LI", 
    AvSESI."1S-LP", 
    AvSESI."1S-MAT", 
    AvSESI."2S-CH", 
    AvSESI."2S-CN", 
    AvSESI."2S-LI", 
    AvSESI."2S-LP", 
    AvSESI."2S-MAT", 
    AvSESI."3S-CH", 
    AvSESI."3S-CN", 
    AvSESI."3S-LI", 
    AvSESI."3S-LP", 
    AvSESI."3S-MAT", 
    Al.Ano, 
    Al.Turma
FROM 
    AlunosGeral AS Al 
INNER JOIN 
    NotasEF1 AS AvInterna ON Al.RM = AvInterna.RM 
INNER JOIN 
    AvaliaSESI AS AvSESI ON Al.RM = AvSESI.rm;


	CREATE VIEW TabelaGeralEM AS
SELECT 
    Al.NomeAluno, 
    Al.RM, 
    AvInterna."NotaFinalBIO", 
    AvInterna."NotaFinalFIS", 
    AvInterna."NotaFinalQUI", 
    AvInterna."NotaFinalMA", 
    AvInterna."NotaFinalLP", 
    AvInterna."NotaFinalAR", 
    AvInterna."NotaFinalEF", 
    AvInterna."NotaFinalLI", 
    AvInterna."NotaFinalHI", 
    AvInterna."NotaFinalGE", 
    AvInterna."NotaFinalSOC", 
    AvInterna."NotaFinalFIL", 
    AvSESI.ComDeficiencia, 
    AvSESI."1S-CH", 
    AvSESI."1S-CN", 
    AvSESI."1S-LI", 
    AvSESI."1S-LP", 
    AvSESI."1S-MAT", 
    AvSESI."2S-CH", 
    AvSESI."2S-CN", 
    AvSESI."2S-LI", 
    AvSESI."2S-LP", 
    AvSESI."2S-MAT", 
    AvSESI."3S-CH", 
    AvSESI."3S-CN", 
    AvSESI."3S-LI", 
    AvSESI."3S-LP", 
    AvSESI."3S-MAT", 
    Al.Ano, 
    Al.Turma
FROM 
    AlunosGeral AS Al 
INNER JOIN 
    NotasEM AS AvInterna ON Al.RM = AvInterna.RM 
INNER JOIN 
    AvaliaSESI AS AvSESI ON Al.RM = AvSESI.rm 
INNER JOIN 
    CursoTec AS Ctec ON Al.RM = Ctec.rm;


