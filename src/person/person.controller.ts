import { Metadata, ServerUnaryCall } from "@grpc/grpc-js";
import { Controller } from "@nestjs/common";
import { GrpcMethod } from "@nestjs/microservices";
import { EmptyPerson, Person, PersonList } from "./person.interface";
import { PersonByName } from "./person.query";

@Controller()
export class PersonController {
    private readonly persons: Person[] = [
        { id: 1, name: "Gabriel" },
        { id: 2, name: "Leandro" },
        { id: 3, name: "Junior" },
        { id: 4, name: "Davi" },
    ];

    @GrpcMethod("PersonService", "FindOne")
    async findOne(data: PersonByName, metadata: Metadata, call: ServerUnaryCall<any, any>): Promise<Person> {
        const person = this.persons.find((p) => p.name === data.name);
        return person || EmptyPerson;
    }

    @GrpcMethod("PersonService", "FindAll")
    async findAll(data: void, metadata: Metadata, call: ServerUnaryCall<any, any>): Promise<PersonList> {
        return {
            persons: this.persons,
        };
    }
}
