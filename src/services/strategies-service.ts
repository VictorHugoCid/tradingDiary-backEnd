import { strategyAlreadyExistsError } from "@/errors";
import { strategiesRepository } from "@/repositories";

export async function getStrategies(userId: number) {
  return strategiesRepository.findStrategies(userId);
}

export async function postStrategy(data: any) {
  //verificar se já existe uma estratégia com esse nome
  const strategy = await strategiesRepository.findStrategyByName(data.name);

  if (strategy) {
    // enviar erro de já existir
    throw strategyAlreadyExistsError();
  }

  const newStrategy = await strategiesRepository.createStrategy(data);
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
