import { Table, Space } from "antd";

function TodoDisplay({ todos, onDeleteTodo, onUpdateTodo }) {
  const columns = [
    {
      title: "Date",
      dataIndex: "dateValue",
      key: "dateValue",
    },
    {
      title: "Todo",
      dataIndex: "value",
      key: "value",
    },
    {
      title: "Status",
      dataIndex: "statusValue",
      key: "statusValue",
    },

    {
      title: "Action",
      key: "id",
      render: (record) => {
        const { id } = record;
        return (
          <Space size="middle">
            <button
              type="button"
              onClick={() => onDeleteTodo(id)}
              className="btn btn-danger btn-sm m-2"
            >
              delete
            </button>

            <button
              type="primary"
              className="btn btn btn-sm m-2"
              onClick={() => onUpdateTodo(record)}
            // onClick={this.showModal}
            >
              Edit
            </button>
          </Space>
        );
      },
    },
  ];

  return (
    <div className="todoContainer">
      <Table columns={columns} dataSource={todos} />
      <button
        type="button"
        onClick={() => onDeleteTodo("all")}
        className="btn btn-danger btn-sm m-2"
      >
        Delete All
      </button>
    </div>
  );
}

export default TodoDisplay;
