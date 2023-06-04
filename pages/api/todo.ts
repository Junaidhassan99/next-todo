import mongoose from "mongoose";
import { TodoDataItem } from "../../data-types/data-types";
import TodoModel from "../../mongoose-models/todo-model";

export default async function handler(req: any, res: any) {
  if (
    mongoose.connection.readyState === 0 ||
    mongoose.connection.readyState === 3
  ) {
    //if mongo is disconnected

    let dbConnectionStatusString = "Unknown";

    await mongoose
      .connect(process.env.REACT_APP_MONGO_API!)
      .then(() => (dbConnectionStatusString = "Connected to MongoDB"))
      .catch(() => {
        dbConnectionStatusString = "Failed to Connected to MongoDB";
      });

    console.log(dbConnectionStatusString);
  }

  switch (req.method) {
    case "GET": {
      const todosResponse = await TodoModel.find();

      res.status(200).json(todosResponse);

      break;
    }
    case "POST": {
      //Do not parse this to json this is JS object
      const data: TodoDataItem = req.body;

      // console.log(`Post Req Body: ${JSON.stringify(data)}`);

      const createTodoModel = await TodoModel.create({ ...data });
      const saveResponse = await createTodoModel.save();

      res.status(200).json(saveResponse._id);

      break;
    }
    case "PUT": {
      const data: TodoDataItem = req.body;

      const responseUpdateTodo = await TodoModel.findOneAndUpdate(
        { _id: data._id },
        {
          task: data.task,
          complete: data.complete,
          completeTime: data.completeTime,
        }
      );

      return res.status(200).json(responseUpdateTodo);
    }
    case "DELETE": {
      const dataId = req.query.id as string;
      console.log(dataId);

      const responseDelete: any = await TodoModel.deleteOne({
        _id: dataId,
      });

      return res.status(200).json(dataId);
    }
    default: {
      res.status(404).json("Req Not Found");
      break;
    }
  }
}
