let studentdata = {
  name : "andi",
  java_programming_score : 80,
  python_programming_score : 100,
  javascript_programming_score : 80,
  infostudent : function (){
    return (
      "name : " + this.name + "\n" + "java score : " + this.java_programming_score + "\n" + "python score : " + "js score : " + this.javascript_programming_score
      )
  }
}
console.log(studentdata.infostudent());
