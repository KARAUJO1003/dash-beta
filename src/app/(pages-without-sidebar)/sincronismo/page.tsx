import Image from "next/image";
import IMG_AFS from "../../../../public/static/sid/AF.png";
import IMG_LD from "../../../../public/static/sid/LD.png";
import IMG_FP from "../../../../public/static/sid/FP.png";
import IMG_LC2 from "../../../../public/static/sid/LC2.png";
import IMG_LAMINACAO from "../../../../public/static/sid/laminacao.png";
import IMG_LING22 from "../../../../public/static/sid/Ling22.png";
import IMG_PANELA from "../../../../public/static/sid/panela11.png";
import IMG_TERMO from "../../../../public/static/sid/termo.png";
import BACKGROUND_IMAGE from "../../../../public/static/sid/MOD_01.jpg";

const TabelaDados = () => {
  const dados = [
    { label: "Abertura da Tocha:", col1: 0, col2: 0, unit: "%" },
    { label: "Pressão Topo:", col1: 3799.2, col2: 3410.7, unit: "mmCa" },
    { label: "Permeabilidade:", col1: 7.481, col2: 5.866, unit: "Nm³/mmCa" },
    { label: "Vazão O2:", col1: 664.8, col2: 702.2, unit: "Nm³/h" },
    { label: "Vazão Ar Setada:", col1: 38000, col2: 38000, unit: "Nm³/h" },
    { label: "Vazão Ar:", col1: 36634.1, col2: 38000, unit: "Nm³/h" },
    { label: "Pressão Gusa:", col1: 8708.2, col2: 9647.4, unit: "mmCa" },
    { label: "Temp. Coroa:", col1: 729.6, col2: 741.9, unit: "°C" },
    { label: "TTC:", col1: 1789.9, col2: 1802.2, unit: "°C" },
    { label: "Temp. Gusa:", col1: 1368, col2: 1377, unit: "°C" },
    { label: "Sonda:", col1: "-", col2: -58.6, unit: "cm" },
    { label: "VDC:", col1: 7, col2: 7, unit: "carg/h" },
    { label: "Gusa Carga:", col1: 3.7, col2: 3.7, unit: "t/carg" },
    { label: "Cargas Fundidas:", col1: 5, col2: 7, unit: "carg" },
    { label: "Produtividade:", col1: 25.9, col2: 24.1, unit: "t/h" },
    { label: "Ritmo de Produção:", col1: 630.48, col2: 621.6, unit: "ton/dia" },
    { label: "Gusa Ultimo Vaza.:", col1: 70.3, col2: 74, unit: "t" },
  ];

  return (
    <div className="p-2 border w-fit bg-zinc-50 rounded-md shadow-md">
      <table className="border-collapse border border-gray-400">
        <thead>
          <tr>
            <th className="text-[0.625rem] border border-gray-400 px-2">
              Parâmetro
            </th>
            <th className="text-[0.625rem] border border-gray-400 px-2">AF1</th>
            <th className="text-[0.625rem] border border-gray-400 px-2">AF2</th>
            <th className="text-[0.625rem] border border-gray-400 px-2">
              Unidade
            </th>
          </tr>
        </thead>
        <tbody>
          {dados.map((linha, index) => (
            <tr key={index}>
              <td className="border text-[0.625rem] border-gray-400 px-2 bg-zinc-200 text-foreground font-medium line-clamp-1">
                {linha.label}
              </td>
              <td className="border text-[0.625rem] border-gray-400 px-2 text-zinc-900 font-medium text-center bg-zinc-50">
                {linha.col1}
              </td>
              <td className="border text-[0.625rem] border-gray-400 px-2 text-zinc-900 font-medium text-center bg-zinc-50">
                {linha.col2}
              </td>
              <td className="border text-[0.625rem] border-gray-400 px-2 bg-zinc-200 text-foreground font-medium ">
                {linha.unit}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const PrevisaoDeVazamento = () => {
  return (
    <div className="p-2 backdrop-blur-md border rounded-md shadow-md mx-auto">
      <strong className="text-[0.625rem]">Previsão de Vazamento</strong>
      <div className="flex gap-2 items-end">
        <div className="flex flex-col text-[0.625rem]">
          <p className="line-clamp-1 border px-2 font-semibold bg-zinc-200 py-px">
            Numero da panela
          </p>
          <p className="line-clamp-1 border px-2 font-semibold bg-zinc-200 py-px">
            Gusa p/iniciar Vaza
          </p>
          <p className="line-clamp-1 border px-2 font-semibold bg-zinc-200 py-px">
            Gusa no Cadinho Atual
          </p>
          <p className="line-clamp-1 border px-2 font-semibold bg-zinc-200 py-px">
            Gusa Faltante
          </p>
          <p className="line-clamp-1 border px-2 font-semibold bg-zinc-200 py-px">
            Tempo restante
          </p>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-[0.625rem] font-bold border w-full rounded-t text-center bg-avb-green-600 text-zinc-50">
            AF - 01
          </span>
          <div className="flex">
            <div className="text-[0.625rem]">
              <p className="border px-2 text-center py-px bg-zinc-200 font-medium">
                1
              </p>
              <p className="border px-2 text-center py-px bg-zinc-50 font-medium">
                25,07
              </p>
              <p className="border px-2 text-center py-px bg-zinc-50 font-medium">
                51,5
              </p>
              <p className="border px-2 text-center py-px bg-zinc-50 font-medium">
                0
              </p>
              <p className="border px-2 text-center py-px bg-zinc-50 font-medium">
                0
              </p>
            </div>
            <div className="text-[0.625rem]">
              <p className="border px-2 text-center py-px bg-zinc-200 font-medium">
                2
              </p>
              <p className="border px-2 text-center py-px bg-zinc-50 font-medium">
                25,07
              </p>
              <p className="border px-2 text-center py-px bg-zinc-50 font-medium">
                51,5
              </p>
              <p className="border px-2 text-center py-px bg-zinc-50 font-medium">
                0
              </p>
              <p className="border px-2 text-center py-px bg-zinc-50 font-medium">
                0
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-[0.625rem] font-bold border w-full rounded-t  text-center bg-avb-green-600 text-zinc-50">
            AF - 02
          </span>
          <div className="flex">
            <div className="text-[0.625rem]">
              <p className="border px-2 text-center py-px bg-zinc-200 font-medium">
                1
              </p>
              <p className="border px-2 text-center py-px bg-zinc-50 font-medium">
                25,07
              </p>
              <p className="border px-2 text-center py-px bg-zinc-50 font-medium">
                51,5
              </p>
              <p className="border px-2 text-center py-px bg-zinc-50 font-medium">
                0
              </p>
              <p className="border px-2 text-center py-px bg-zinc-50 font-medium">
                0
              </p>
            </div>
            <div className="text-[0.625rem]">
              <p className="border px-2 text-center py-px bg-zinc-200 font-medium">
                2
              </p>
              <p className="border px-2 text-center py-px bg-zinc-50 font-medium">
                25,07
              </p>
              <p className="border px-2 text-center py-px bg-zinc-50 font-medium">
                51,5
              </p>
              <p className="border px-2 text-center py-px bg-zinc-50 font-medium">
                0
              </p>
              <p className="border px-2 text-center py-px bg-zinc-50 font-medium">
                0
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Sincronismo() {
  const dados = [
    ["0h", 6, "12h", 6],
    ["1h", 7, "13h", 6],
    ["2h", 7, "14h", 6],
    ["3h", 7, "15h", 5],
    ["4h", 7, "16h", 6],
    ["5h", 7, "17h", 6],
    ["6h", 6, "18h", 6],
    ["7h", 7, "19h", 6],
    ["8h", 7, "20h", 6],
    ["9h", 7, "21h", 6],
    ["10h", 5, "22h", 6],
    ["11h", 5, "23h", 6],
  ];

  const valueBarLC = `h-[50%]`;

  return (
    <div className="space-y-2 h-fit px-4 py-4">
      <Image
        fill
        src={BACKGROUND_IMAGE}
        alt="Background Image Sincronismo"
        className="-z-20"
      />
      <div className="flex gap-2 justify-between">
        <section className=" flex flex-col items-center h-fit w-max min-w-[387px]">
          <strong className="text-[0.625rem] border w-full bg-avb-green-600 text-zinc-50 p-2 rounded-t-md text-center shadow-md">
            Ritmo de Produção/Dia AFS: 1227 t
          </strong>
          <div className="flex backdrop-blur-md rounded-md shadow-md p-2">
            <div className="flex w-fit">
              <table className="border-collapse border border-gray-400 ">
                <thead>
                  <tr className="flex w-full items-center justify-center">
                    <th className="text-[0.625rem]">N° Cargas</th>
                  </tr>
                </thead>
                <tbody>
                  {dados.map((linha, index) => (
                    <tr key={index} className="flex">
                      {linha.map((celula, subIndex) => (
                        <td
                          key={subIndex}
                          className={`min-w-8 text-[0.625rem] flex justify-center items-center border border-gray-400 font-medium ${subIndex % 2 === 0 ? "dark:bg-blue-950 bg-zinc-200" : "bg-zinc-50"} ${index === 9 && subIndex === 0 ? "!bg-avb-green-600 text-white" : ""}`}
                        >
                          {celula}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
              <Image
                src={IMG_AFS}
                alt="Imagem alto forno"
                className=" h-fit w-14 "
              />
            </div>
            <div className="flex w-fit">
              <Image
                src={IMG_AFS}
                alt="Imagem alto forno"
                className="h-fit w-14"
              />
              <table className="border-collapse border border-gray-400 ">
                <thead>
                  <tr className="flex w-full items-center justify-center">
                    <th className="text-[0.625rem]">N° Cargas</th>
                  </tr>
                </thead>
                <tbody>
                  {dados.map((linha, index) => (
                    <tr key={index} className="flex">
                      {linha.map((celula, subIndex) => (
                        <td
                          key={subIndex}
                          className={`min-w-8 text-[0.625rem] flex justify-center items-center border border-gray-400 font-medium ${subIndex % 2 === 0 ? "dark:bg-blue-950 bg-zinc-200" : "bg-zinc-50"} ${index === 9 && subIndex === 0 ? "!bg-avb-green-600 text-white" : ""}`}
                        >
                          {celula}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="flex flex-col gap-2 min-w-[340px]">
          <PrevisaoDeVazamento />
          <div className="flex gap-2 w-full justify-around items-end ">
            <div className="flex flex-col items-center backdrop-blur-md rounded-md shadow-md border p-2 h-full justify-end ">
              <Image src={IMG_LD} alt="Imagem LD" className="h-24 w-fit" />
              <div className="flex flex-col">
                <div className="grid grid-cols-2">
                  <span className="line-clamp-1 text-[0.625rem] border pl-2 font-bold bg-zinc-200">
                    Vazão 02
                  </span>
                  <span className="line-clamp-1 text-[0.625rem] border pl-2 font-medium bg-zinc-50">
                    0 Nm³/h
                  </span>
                </div>
                <div className="grid grid-cols-2">
                  <span className="line-clamp-1 text-[0.625rem] border pl-2 font-bold bg-zinc-200">
                    Aço vazado
                  </span>
                  <span className="line-clamp-1 text-[0.625rem] border pl-2 font-medium bg-zinc-50">
                    NaN kg
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center backdrop-blur-md rounded-md shadow-md border p-2 h-full justify-end ">
              <Image src={IMG_FP} alt="Imagem LD" className="h-16 w-fit" />
              <div>
                <div className="grid grid-cols-5">
                  <span></span>
                  <span className="text-center font-bold text-[0.625rem]">
                    A
                  </span>
                  <span className="text-center font-bold text-[0.625rem]">
                    B
                  </span>
                  <span className="text-center font-bold text-[0.625rem]">
                    C
                  </span>
                  <span></span>
                </div>
                <div className="grid grid-cols-5">
                  <span className="border px-2 font-bold text-[0.625rem] bg-zinc-200">
                    Pri
                  </span>
                  <div className="border px-2 font-medium text-[0.625rem] bg-zinc-50 text-center">
                    0
                  </div>
                  <div className="border px-2 font-medium text-[0.625rem] bg-zinc-50 text-center">
                    0
                  </div>
                  <div className="border px-2 font-medium text-[0.625rem] bg-zinc-50 text-center">
                    0
                  </div>
                  <span className="border px-2 font-bold text-[0.625rem] bg-zinc-200">
                    A
                  </span>
                </div>
                <div className="grid grid-cols-5">
                  <span className="border px-2 font-bold text-[0.625rem] bg-zinc-200">
                    Sec
                  </span>
                  <div className="border px-2 font-medium text-[0.625rem] bg-zinc-50 text-center">
                    0
                  </div>
                  <div className="border px-2 font-medium text-[0.625rem] bg-zinc-50 text-center">
                    0
                  </div>
                  <div className="border px-2 font-medium text-[0.625rem] bg-zinc-50 text-center">
                    0
                  </div>
                  <span className="border px-2 font-bold text-[0.625rem] bg-zinc-200">
                    kA
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="flex flex-col items-center justify-end p-2 gap-2 backdrop-blur-md rounded-md shadow-md border w-full">
          <div className="relative flex flex-col items-center">
            <div className="flex flex-col items-center">
              <Image
                src={IMG_PANELA}
                alt="Imagem Panela"
                className="absolute -top-16 min-w-22 max-w-24 h-auto z-10"
              />
              <div className="relative">
                <Image
                  src={IMG_LING22}
                  alt="Imagem lingotamento continuo"
                  className=" min-w-32 max-w-40 h-auto"
                />
                <span className="absolute -top-4 left-16 translate-x-1/2 h-10 p-1 bg-yellow-500" />
              </div>
            </div>
            <div className="grid grid-cols-6 gap-2 mb-2 w-full">
              <span></span>
              <span className="flex text-center font-bold text-[0.625rem] bg-zinc-700 border-4 border-zinc-500 h-20 w-full items-end " />

              <span className="flex text-center font-bold text-[0.625rem] bg-zinc-700 border-4 border-zinc-500 h-20 w-full items-end " />

              <span className="flex text-center font-bold text-[0.625rem] bg-zinc-700 border-4 border-zinc-500 h-20 w-full items-end ">
                <span className={`flex w-full ${valueBarLC} bg-yellow-500`} />
              </span>

              <span className="flex text-center font-bold text-[0.625rem] bg-zinc-700 border-4 border-zinc-500 h-20 w-full items-end " />

              <span></span>
            </div>

            <div className="grid grid-cols-6 w-full">
              <span className="border px-2 font-bold text-[0.625rem] bg-zinc-200">
                Pri
              </span>
              <div className="border px-2 font-medium text-[0.625rem] bg-zinc-50 text-center">
                0
              </div>
              <div className="border px-2 font-medium text-[0.625rem] bg-zinc-50 text-center">
                0
              </div>
              <div className="border px-2 font-medium text-[0.625rem] bg-zinc-50 text-center">
                0
              </div>
              <div className="border px-2 font-medium text-[0.625rem] bg-zinc-50 text-center">
                0
              </div>
              <span className="border px-2 font-bold text-[0.625rem] bg-zinc-200">
                A
              </span>
            </div>
            <div className="grid grid-cols-6 w-full">
              <span className="border px-2 font-bold text-[0.625rem] bg-zinc-200">
                Sec
              </span>
              <div className="border px-2 font-medium text-[0.625rem] bg-zinc-50 text-center">
                0
              </div>
              <div className="border px-2 font-medium text-[0.625rem] bg-zinc-50 text-center">
                0
              </div>
              <div className="border px-2 font-medium text-[0.625rem] bg-zinc-50 text-center">
                605
              </div>
              <div className="border px-2 font-medium text-[0.625rem] bg-zinc-50 text-center">
                0
              </div>
              <span className="border px-2 font-bold text-[0.625rem] bg-zinc-200">
                kA
              </span>
            </div>
            <div className="grid grid-cols-6 w-full">
              <span className="border px-2 font-bold text-[0.625rem] bg-zinc-200">
                Sec
              </span>
              <div className="border px-2 font-medium text-[0.625rem] bg-zinc-50 text-center">
                0
              </div>
              <div className="border px-2 font-medium text-[0.625rem] bg-zinc-50 text-center">
                0
              </div>
              <div className="border px-2 font-medium text-[0.625rem] bg-zinc-50 text-center">
                479
              </div>
              <div className="border px-2 font-medium text-[0.625rem] bg-zinc-50 text-center">
                0
              </div>
              <span className="border px-2 font-bold text-[0.625rem] bg-zinc-200">
                kA
              </span>
            </div>
            <div className="grid grid-cols-6 w-full">
              <span className="border px-2 font-bold text-[0.625rem] bg-zinc-200">
                Sec
              </span>
              <div className="border px-2 font-medium text-[0.625rem] bg-zinc-50 text-center">
                0
              </div>
              <div className="border px-2 font-medium text-[0.625rem] bg-zinc-50 text-center">
                0
              </div>
              <div className="border px-2 font-medium text-[0.625rem] bg-zinc-50 text-center">
                0
              </div>
              <div className="border px-2 font-medium text-[0.625rem] bg-zinc-50 text-center">
                0
              </div>
              <span className="border px-2 font-bold text-[0.625rem] bg-zinc-200">
                kA
              </span>
            </div>
          </div>
        </section>

        <section className="flex flex-col items-center justify-end p-2 gap-2 backdrop-blur-md rounded-md shadow-md w-full">
          <Image
            src={IMG_TERMO}
            alt="Imagem Termo Eletrica"
            className="w-48 h-fit -mb-5"
          />
          <table className="border-collapse border border-gray-400">
            <thead className="bg-avb-green-600 text-zinc-50">
              <tr>
                <th className="text-[0.625rem] border border-gray-400 px-2">
                  Parâmetro
                </th>
                <th className="text-[0.625rem] border border-gray-400 px-2">
                  Valor
                </th>
                <th className="text-[0.625rem] border border-gray-400 px-2">
                  Unidade
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="line-clamp-1 border text-[0.625rem] border-gray-400 px-2 bg-zinc-200 text-foreground font-medium">
                  Pressão da linha GAF
                </td>
                <td className="border text-[0.625rem] border-gray-400 px-2 text-zinc-900 font-medium text-center bg-zinc-50">
                  1758
                </td>
                <td className="border text-[0.625rem] border-gray-400 px-2 bg-zinc-200 text-foreground font-medium ">
                  mmH2O
                </td>
              </tr>

              <tr>
                <td className="line-clamp-1 border text-[0.625rem] border-gray-400 px-2 bg-zinc-200 text-foreground font-medium">
                  Vazão de GAF
                </td>
                <td className="border text-[0.625rem] border-gray-400 px-2 text-zinc-900 font-medium text-center bg-zinc-50">
                  36540.0
                </td>
                <td className="border text-[0.625rem] border-gray-400 px-2 bg-zinc-200 text-foreground font-medium ">
                  m³/h
                </td>
              </tr>

              <tr>
                <td className="line-clamp-1 border text-[0.625rem] border-gray-400 px-2 bg-zinc-200 text-foreground font-medium">
                  Pressão da caldeira
                </td>
                <td className="border text-[0.625rem] border-gray-400 px-2 text-zinc-900 font-medium text-center bg-zinc-50">
                  45
                </td>
                <td className="border text-[0.625rem] border-gray-400 px-2 bg-zinc-200 text-foreground font-medium ">
                  kgf/cm²
                </td>
              </tr>

              <tr>
                <td className="line-clamp-1 border text-[0.625rem] border-gray-400 px-2 bg-zinc-200 text-foreground font-medium">
                  Potencia ativa
                </td>
                <td className="border text-[0.625rem] border-gray-400 px-2 text-zinc-900 font-medium text-center bg-zinc-50">
                  7576
                </td>
                <td className="border text-[0.625rem] border-gray-400 px-2 bg-zinc-200 text-foreground font-medium ">
                  KW
                </td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>

      <div className="flex gap-2 ">
        <section className="min-w-[296px] h-fit flex">
          <TabelaDados />
        </section>

        <section className="w-full max-w-96 min-w-60 flex flex-col gap-2 border p-2 justify-around backdrop-blur-md rounded-md shadow-md">
          <div className="flex items-center gap-2 justify-between rounded p-2 border bg-zinc-200">
            <span className="font-bold text-[0.625rem] line-clamp-1">
              Produtividade AFs:
            </span>
            <span className="border bg-zinc-50 text-[0.625rem] px-3 font-medium">
              50 t/h
            </span>
          </div>
          <div className="">
            <div className="flex items-center gap-2 justify-between border py-px bg-zinc-100 rounded pl-2">
              <span className="font-bold text-[0.625rem] line-clamp-1">
                Gusa Cadinho:
              </span>
              <span className="  text-[0.625rem] px-3 font-medium">140.6t</span>
            </div>
            <div className="flex items-center gap-2 justify-between border py-px bg-zinc-100 rounded pl-2">
              <span className="font-bold text-[0.625rem] line-clamp-1">
                Gusa Panelas:
              </span>
              <span className="  text-[0.625rem] px-3 font-medium">0 t</span>
            </div>
            <div className="flex items-center gap-2 justify-between border py-px bg-zinc-100 rounded pl-2">
              <span className="font-bold text-[0.625rem] line-clamp-1">
                Gusa Total:
              </span>
              <span className="  text-[0.625rem] px-3 font-medium">140.6t</span>
            </div>
            <div className="flex items-center gap-2 justify-between border py-px bg-zinc-100 rounded pl-2">
              <span className="font-bold text-[0.625rem] line-clamp-1">
                Carga Solida:
              </span>
              <span className="  text-[0.625rem] px-3 font-medium">27,6%</span>
            </div>
            <div className="flex items-center gap-2 justify-between border py-px bg-zinc-100 rounded pl-2">
              <span className="font-bold text-[0.625rem] line-clamp-1">
                Rendimento:
              </span>
              <span className="  text-[0.625rem] px-3 font-medium">92.8%</span>
            </div>
            <div className="flex items-center gap-2 justify-between border py-px bg-zinc-100 rounded pl-2">
              <span className="font-bold text-[0.625rem] line-clamp-1">
                Aço Equivalente:
              </span>
              <span className="  text-[0.625rem] px-3 font-medium">166.9t</span>
            </div>
          </div>
          <div className="flex items-center gap-2 justify-between rounded p-2 border bg-zinc-200">
            <span className="font-bold text-[0.625rem] max-w-32 line-clamp-2">
              Produtividade Aciaria x Produtividade AFs::
            </span>
            <span className="border bg-zinc-50 text-[0.625rem] px-3 font-medium">
              64.3 t/h
            </span>
          </div>
        </section>

        <section className="w-full min-w-72 max-w-[620px] p-2 border backdrop-blur-md rounded-md flex flex-col justify-around shadow-md">
          <div className="flex flex-col items-center">
            <Image
              src={IMG_LC2}
              alt="Imagem Laminacao"
              className="w-60 h-auto -mt-14"
            />
            <Image
              src={IMG_LAMINACAO}
              alt="Imagem Laminacao"
              className="w-72 h-auto"
            />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2 justify-between py-px px-2 border bg-zinc-200">
              <span className="font-bold text-[0.625rem] line-clamp-1">
                Status:
              </span>
              <span className=" text-[0.625rem] px-3 font-medium line-clamp-1">
                Laminador produzindo! GAP desligado
              </span>
            </div>
            <div className="flex items-center gap-2 justify-between py-px px-2 border bg-zinc-200">
              <span className="font-bold text-[0.625rem] line-clamp-1">
                Produto:
              </span>
              <span className=" text-[0.625rem] px-3 font-medium line-clamp-1">
                FM-6.50MM
              </span>
            </div>
            <div className="flex items-center gap-2 justify-between py-px px-2 border bg-zinc-200">
              <span className="font-bold text-[0.625rem] line-clamp-1">
                Velocidade Material:
              </span>
              <span className=" text-[0.625rem] px-3 font-medium line-clamp-1">
                105 m/sec
              </span>
            </div>
            <div className="flex items-center gap-2 justify-between py-px px-2 border bg-zinc-200">
              <span className="font-bold text-[0.625rem] line-clamp-1">
                Utilização:
              </span>
              <span className=" text-[0.625rem] px-3 font-medium line-clamp-1">
                69,1%
              </span>
            </div>
            <div className="flex items-center gap-2 justify-between py-px px-2 border bg-zinc-200">
              <span className="font-bold text-[0.625rem] line-clamp-1">
                Pressão Gás RHF:
              </span>
              <span className=" text-[0.625rem] px-3 font-medium line-clamp-1">
                1355.9 mmCa
              </span>
            </div>
            <div className="flex items-center gap-2 justify-between py-px px-2 border bg-zinc-200">
              <span className="font-bold text-[0.625rem] line-clamp-1">
                Vazão Gás RHF:
              </span>
              <span className=" text-[0.625rem] px-3 font-medium line-clamp-1">
                25741.67 Nm3/h
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2 justify-between rounded p-2 border bg-zinc-200">
            <span className="font-bold text-[0.625rem] line-clamp-1">
              Pressão de Gás Laminação:
            </span>
            <span className="border bg-zinc-50 text-[0.625rem] px-3 font-medium">
              3797 mmCa
            </span>
          </div>
        </section>

        <section className="w-full max-w-[720px] min-w-72 p-2 border backdrop-blur-md rounded-md flex flex-col justify-around shadow-md">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 justify-between px-2 rounded border bg-zinc-200">
              <span className="font-bold text-[0.625rem] py-2 line-clamp-1">
                Tempo Fim Corrida
              </span>
              <span className=" text-[0.625rem] px-3 font-medium bg-zinc-50 ">
                73 min
              </span>
            </div>

            <div className="flex items-center gap-2 justify-between px-2 rounded border bg-zinc-200">
              <span className="font-bold text-[0.625rem] py-2 line-clamp-1">
                Desvio Produtividade:
              </span>
              <span className=" text-[0.625rem] px-3 font-medium bg-zinc-50">
                -12.6t/h
              </span>
            </div>
          </div>
          <div>
            <strong className="text-[0.625rem] text-center w-full flex items-center  justify-center bg-avb-green-600  text-zinc-50 py-2 rounded-t border">
              Projeção Saldo de Gusa
            </strong>
            <div className="flex items-center w-full justify-center">
              <span className="font-bold text-[0.625rem] px-2 text-center w-full bg-zinc-200 border">
                01h
              </span>
              <span className=" text-[0.625rem] text-center px-3 font-medium bg-zinc-50 w-full border">
                84.2t
              </span>
              <span className="font-bold text-[0.625rem] px-2 text-center w-full bg-zinc-200 border">
                07h
              </span>
              <span className=" text-[0.625rem] text-center px-3 font-medium bg-zinc-50 w-full border">
                94.5t
              </span>
            </div>

            <div className="flex items-center w-full justify-center">
              <span className="font-bold text-[0.625rem] px-2 text-center w-full bg-zinc-200 border">
                02h
              </span>
              <span className=" text-[0.625rem] text-center px-3 font-medium bg-zinc-50 w-full border">
                84.2t
              </span>
              <span className="font-bold text-[0.625rem] px-2 text-center w-full bg-zinc-200 border">
                08h
              </span>
              <span className=" text-[0.625rem] text-center px-3 font-medium bg-zinc-50 w-full border">
                94.5t
              </span>
            </div>

            <div className="flex items-center w-full justify-center">
              <span className="font-bold text-[0.625rem] px-2 text-center w-full bg-zinc-200 border">
                03h
              </span>
              <span className=" text-[0.625rem] text-center px-3 font-medium bg-zinc-50 w-full border">
                84.2t
              </span>
              <span className="font-bold text-[0.625rem] px-2 text-center w-full bg-zinc-200 border">
                09h
              </span>
              <span className=" text-[0.625rem] text-center px-3 font-medium bg-zinc-50 w-full border">
                94.5t
              </span>
            </div>
            <div className="flex items-center w-full justify-center">
              <span className="font-bold text-[0.625rem] px-2 text-center w-full bg-zinc-200 border">
                04h
              </span>
              <span className=" text-[0.625rem] text-center px-3 font-medium bg-zinc-50 w-full border">
                84.2t
              </span>
              <span className="font-bold text-[0.625rem] px-2 text-center w-full bg-zinc-200 border">
                10h
              </span>
              <span className=" text-[0.625rem] text-center px-3 font-medium bg-zinc-50 w-full border">
                94.5t
              </span>
            </div>
            <div className="flex items-center w-full justify-center">
              <span className="font-bold text-[0.625rem] px-2 text-center w-full bg-zinc-200 border">
                05h
              </span>
              <span className=" text-[0.625rem] text-center px-3 font-medium bg-zinc-50 w-full border">
                84.2t
              </span>
              <span className="font-bold text-[0.625rem] px-2 text-center w-full bg-zinc-200 border">
                11h
              </span>
              <span className=" text-[0.625rem] text-center px-3 font-medium bg-zinc-50 w-full border">
                94.5t
              </span>
            </div>
            <div className="flex items-center w-full justify-center">
              <span className="font-bold text-[0.625rem] px-2 text-center w-full bg-zinc-200 border">
                06h
              </span>
              <span className=" text-[0.625rem] text-center px-3 font-medium bg-zinc-50 w-full border">
                84.2t
              </span>
              <span className="font-bold text-[0.625rem] px-2 text-center w-full bg-zinc-200 border">
                12h
              </span>
              <span className=" text-[0.625rem] text-center px-3 font-medium bg-zinc-50 w-full border">
                94.5t
              </span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
