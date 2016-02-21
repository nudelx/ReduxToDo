var counter = 1 ;
export default (text = 'empty') => {

  return {
    todoName : text,
    id: counter++,
    createDate: new Date().getTime(),
    modifyDate: new Date().getTime()
  }
}