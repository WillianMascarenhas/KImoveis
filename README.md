# Projeto Final: KImóveis - TypeORM com Relacionamentos

## Introdução

O dono da imobiliária Kimóveis contratou sua empresa para desenvolver uma aplicação para o gerenciamento de seus serviços.

Através da aplicação deverá ser possível realizar o cadastro de imóveis e de usuários interessados na aquisição de propriedades. Além disso, deverá ser possível realizar o agendamento e consultar horários de visitas às propriedades disponíveis no banco de dados da imobiliária.

A sua empresa está te confiando esse desafio, portanto, dê o seu melhor no desenvolvimento desse projeto, seguindo todas as regras impostas pela empresa contratante.

## Endpoints:

| Método | Endpoint                   | Responsabilidade                                  | Autenticação                           |
| ------ | -------------------------- | ------------------------------------------------- | -------------------------------------- |
| POST   | /users                     | Criação de usuário                                | Qualquer usuário, não necessita token  |
| GET    | /users                     | Lista todos os usuários                           | Apenas Admnistradores                  |
| PATCH  | /users/:id                 | Atualiza um usuário                               | Apenas Admnistradores ou dono da conta |
| DELETE | /users/:id                 | Realiza um soft delete no usuário                 | Apenas Admnistradores                  |
| POST   | /login                     | Gera o token de autenticação                      | Qualquer usuário, não necessita token  |
| POST   | /categories                | Criação de categoria                              | Apenas Admnistradores                  |
| GET    | /categories                | Lista todas as categorias                         | Qualquer usuário, não necessita token  |
| GET    | /categories/:id/realEstate | Lista todos imóveis que pertencem a uma categoria | Qualquer usuário, não necessita token  |
| POST   | /realEstate                | Criação de um imóvel                              | Apenas Admnistradores                  |
| GET    | /realEstate                | Lista todos os imóveis                            | Qualquer usuário, não necessita token  |
| POST   | /schedules                 | Agenda uma visita a um imóvel                     | Qualquer usuário, obrigatório token    |
| GET    | /schedules/realEstate/:id  | lista todos os agendamentos de um imóvel          | Apenas Admnistradores                  |


