import * as React from 'react';
import * as Redux from 'redux';
import {connect} from 'react-redux';
import { Card, Table, Button, Modal, Input } from 'antd';
import * as Icons from '@ant-design/icons';
import { TodoItem } from '../model/TodoItem';
import { IState } from '../store/configStore';
import { actionCreators } from '../actions/actions';

const { Column } = Table;

interface ITodoProps {
    todoItems: TodoItem[];
    actions?: any;
}

interface ITodoState {
    modalVisible: boolean;
    newTaskName: string;
}

class TodoPageComponent extends React.Component<ITodoProps, ITodoState> {
    constructor(props: ITodoProps) {
        super(props);
        this.state = {
            modalVisible: false,
            newTaskName: "",
        };
        this.handleOk = this.handleOk.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
    }

    public render(): JSX.Element {
        return (
            <div>
                <Card bordered title="Todo List" style={{ margin: "16px 16px"}}>
                    <Button type="primary" icon={<Icons.PlusOutlined />}
                        onClick={() => {this.setState({modalVisible: true}); }}>New Task</Button>
                    <Table dataSource={this.props.todoItems}>
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
                                    this.props.actions.completeTodoAction(record);
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

    private handleOk = () => {
        const item: TodoItem = {
            id: 0,
            key: 0,
            name: this.state.newTaskName,
            isCompleted: false,
        };
        this.props.actions.addTodoAction(item);
        this.setState({modalVisible: false});
    }
    private handleCancel = () => {
        this.setState({modalVisible: false});
    }
}

const mapStateToProps = (state: IState): ITodoProps => {
    return {
        todoItems: state.todos,
    };
};

const mapDispatchToProps = (dispatch: Redux.Dispatch<any>) => {
    return {
        actions: Redux.bindActionCreators(actionCreators, dispatch),
    };
};

export const TodoPage = connect<ITodoProps>(mapStateToProps, mapDispatchToProps)(TodoPageComponent);
