import { strategyAlreadyExistsError } from "@/errors";
import { strategyData } from "@/protocols";
import { strategiesRepository } from "@/repositories";

export async function getStrategies(userId: number) {
  return strategiesRepository.findStrategies(userId);
}

export async function postStrategy(data: strategyData, userId: number) {
  //verificar se já existe uma estratégia com esse nome
  const strategy = await strategiesRepository.findStrategyByName(data.name.toLowerCase());
  console.log("🚀🚀🚀 ~ file: strategies-service.ts:12 ~ postStrategy ~ strategy", strategy);

  if (strategy) {
    console.log("entrou no IF");
    // enviar erro de já existir
    throw strategyAlreadyExistsError();
  }

  const newStrategy = await strategiesRepository.createStrategy(data, userId);
  console.log("🚀🚀🚀 ~ file: strategies-service.ts:21 ~ postStrategy ~ newStrategy", newStrategy);
  return newStrategy;
}

export async function putStrategy(data: any) {
  //verificar se já existe uma estratégia com esse nome
  const strategy = await strategiesRepository.findStrategyByName(data.name);

  if (strategy) {
    // enviar erro de já existir
    throw strategyAlreadyExistsError();
  }

  const newStrategy = await strategiesRepository.update(data);
  return newStrategy;
}

const strategiesService = {
  getStrategies,
  postStrategy,
  putStrategy,
};

export { strategiesService };
