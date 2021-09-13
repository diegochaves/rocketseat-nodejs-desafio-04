import { Response, Request } from "express";

import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  handle(request: Request, response: Response): Response {
    try {
      const { name, email } = request.body;
      return response
        .status(201)
        .send(this.createUserUseCase.execute({ name, email }));
    } catch (e) {
      return response.status(400).send({ error: e.message });
    }
  }
}

export { CreateUserController };
