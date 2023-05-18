import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { RealEstate } from "../../entities";
import { AppError } from "../../erros";

const listScheduleService = async (realEstateId: number) => {
  const realEstateRepository: Repository<RealEstate> =
    AppDataSource.getTreeRepository(RealEstate);

  const list = await realEstateRepository.findOne({
      where:{
          id: realEstateId
      },
      relations: {
          schedules: {
              user: true
          },
          address: true,
          category: true
      }
  })
  if(!list){
    throw new AppError("RealEstate not found", 404)
  }

  // const list = await realEstateRepository
  //   .createQueryBuilder("realEstate") // esse realEstate é um apelido
  //   // .select(["realEstate.id","address.street", ]) selecionar campo especificos 
  //   .innerJoinAndSelect("realEstate.address", "address")
  //   .innerJoinAndSelect("realEstate.category", "category")
  //   .innerJoinAndSelect("realEstate.schedule", "schedule") // esse schedule é um apelido posso coloar qualquer name 
  //   .innerJoinAndSelect("schedule.user", "user")
  //   .where("realEstate.id = :realEstateId", { realEstateId })
  //   .getOne();

  //   if(!list){
  //     throw new AppError("RealEstate not found", 404)
  //   }

  return list;
};

export { listScheduleService };
