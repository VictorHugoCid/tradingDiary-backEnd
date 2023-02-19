import { strategyAlreadyExistsError } from "@/errors";
import { newStrategyData, strategyData } from "@/protocols";
import { strategiesRepository } from "@/repositories";

export async function getStrategies(userId: number) {
  return strategiesRepository.findStrategies(userId);
}

export async function postStrategy(data: strategyData, userId: number) {
  //verificar se já existe uma estratégia com esse nome
  const strategy = await strategiesRepository.findStrategyByName(data.name.toLowerCase());

  if (strategy) {
    // enviar erro de já existir
    throw strategyAlreadyExistsError();
  }

  const newStrategy = await strategiesRepository.createStrategy(data, userId);
  return newStrategy;
}

export async function putStrategy(data: strategyData, userId: number) {
  //verificar se já existe uma estratégia com esse nome
  const strategy = await strategiesRepository.findStrategyByName(data.name);

  if (strategy) {
    // enviar erro de já existir
    throw strategyAlreadyExistsError();
  }

  const newStrategy = await strategiesRepository.update(data);
  return newStrategy;
}

export async function deleteStrategy(id: number) {
  const isUsed = await strategyIsUsed(id);
  if (isUsed) {
    throw strategyAlreadyExistsError();
  }
  const strategy = await strategiesRepository.deleteStrategy(id);
  return strategy;
}

export async function strategyIsUsed(id: number) {
  const isUsed = await strategiesRepository.findStrategyById(id);

  return isUsed;
}

const strategiesService = {
  getStrategies,
  postStrategy,
  putStrategy,
  deleteStrategy,
};

export { strategiesService };
