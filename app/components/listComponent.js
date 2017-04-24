var List = React.createClass({
    render: function(){
      var promoArrShow = this.props.items.map(function(item, i){
          return (
              <div key={i} className="vueCodShow">
                <div className="vueMesg">
                  <h2> {item.mail} </h2>
                  <p> {item.phone} </p>
                </div>
                <div className="vueRightBlock">
                  <p>Приєднався</p>
                  <div className="vueMesg">
                      <h2>{item.dTime}</h2>
                      <a>Детальніше</a>
                  </div>
                </div>
               </div>
          )
      });

      return ( <div> { promoArrShow } </div> );
    }
});
