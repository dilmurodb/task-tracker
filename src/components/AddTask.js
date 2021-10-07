const AddTask = () => {
  return (
    <form className="add-form">
      <div className="form-control">
        <lable>Task</lable>
        <input type="text" placeholder="Add a Task"></input>
      </div>
      <div className="form-control">
        <lable>Day and Time</lable>
        <input type="text" placeholder="Add a Date"></input>
      </div>
      <div className="form-control">
        <lable>Reminder</lable>
        <input type="checkbox"></input>
      </div>
      <input type="submit" value="Save the Task"></input>
    </form>
  );
};

export default AddTask;
