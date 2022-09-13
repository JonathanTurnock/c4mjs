import _, { isNil, omitBy } from "lodash";
import { GroupEntity } from "../entity/group.entity";
import { database } from "./database";

export const GroupRepository = {
  findAll: (): Promise<GroupEntity[]> =>
    new Promise((resolve, reject) =>
      database.all(`select * from "group"`, (error, rows) => {
        if (error) reject(error);
        resolve(
          _(rows)
            .map((it) => omitBy(it, isNil))
            .value() as GroupEntity[]
        );
      })
    ),
  save: (group: GroupEntity): Promise<GroupEntity> =>
    new Promise((resolve, reject) =>
      database.run(
        `insert into "group" (id, name, tags) values (?, ?, ?)`,
        [group.id, group.name, group.tags],
        (error) => {
          if (error) reject(error);
          resolve(group);
        }
      )
    ),
};
