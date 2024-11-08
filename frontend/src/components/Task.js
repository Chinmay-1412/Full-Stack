import { BiTrash,BiEdit} from "react-icons/bi";
import { TiTick } from "react-icons/ti";

const Task = () => {
  return (
    <div className="task">
        <p>
          <b>1.</b>
          Task 1
        </p>
        <div className="task-icons">
          <TiTick color="green"/>
          <BiEdit colour="blue"/>
          <BiTrash colour="red"/>
        </div>
    </div>
  )
}

export default Task;