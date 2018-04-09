import * as React from "react";
import { Card, Table, Button, Modal, Input } from "antd";

const { Column } = Table;

interface TodoItem {
    id: number;
    key: number;
    name: string;
    isCompleted: boolean;
}

interface ITodoState {
    todoItems: TodoItem[];
    modalVisible: boolean;
    newTaskName: string;
}

class TodoPage extends React.Component<{}, ITodoState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            todoItems: [],
            modalVisible: false,
            newTaskName: "",
        };
        this.mapTodoItems = this.mapTodoItems.bind(this);
        this.fetchTodoList = this.fetchTodoList.bind(this);
        this.updateTodoList = this.updateTodoList.bind(this);
        this.handleOk = this.handleOk.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.addTodoItem = this.addTodoItem.bind(this);
    }

    public componentDidMount() {
        this.fetchTodoList();
    }

    public render(): JSX.Element {
        return (
            <div>
                <Card bordered title="Welcome to Go Todo" style={{ margin: "16px 16px"}}>
                    <Button type="primary" icon="plus"
                        onClick={() => {this.setState({modalVisible: true}); }}>New Task</Button>
                    <Table dataSource={this.state.todoItems}>
                        <Column title="Id" dataIndex="id" key="id"></Column>
                        <Column title="Task" dataIndex="name" key="name"></Column>
                        <Column title="Status" dataIndex="isCompleted" key="isCompleted"
                            render={(text: any, record: TodoItem, index: number) => {
                                return <span>{record.isCompleted ? "Completed" : "Pending"}</span>;
                            }}></Column>
                        <Column title="Action" key="action" render={(text: any, record: TodoItem, index: number) => (
                            <Button type="primary" disabled={record.isCompleted}
                                onClick={() => {
                                    record.isCompleted = true;
                                    this.updateTodoList(record);
                                }}>Complete</Button>
                        )} />
                    </Table>
                </Card>
                <Modal title="New Task" visible={this.state.modalVisible}
                    onOk={() => this.handleOk()}
                    onCancel={() => this.handleCancel()}>
                    <Input.TextArea placeholder="Input the name of the task" rows={4}
                        onChange={(e) => {
                            this.setState({newTaskName: e.target.value});
                        }} />
                </Modal>
            </div>
        );
    }

    private fetchTodoList() {

    }

    private updateTodoList(item: TodoItem) {

    }

    private mapTodoItems(items: any[]): TodoItem[] {
        return items.map((item) => {
            return item as TodoItem;
        });
    }

    private addTodoItem = (item: TodoItem) => {

    }

    private handleOk = () => {
        const item: TodoItem = {
            id: 0,
            key: 0,
            name: this.state.newTaskName,
            isCompleted: false,
        };
        this.addTodoItem(item);
        this.setState({modalVisible: false});
    }
    private handleCancel = () => {
        this.setState({modalVisible: false});
    }
}

export default TodoPage;
