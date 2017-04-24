var ShowPromo = React.createClass({
    dataPic: function(){
        $("#datapicker2").datepicker({
            dateFormat: 'dd.mm.yy'
        });
    },

    render: function(){
         var promoArrShow =  this.props.items.map(function(item, i){
             return (
                <div className="promoCodShow" key={i}>
                <p>Промо на {item.cof}% дійсне до {item.dTime} код:{item.mesg}</p>
                <a className="deletepromo">Видалити</a>
                </div>
             )
         });
         return (
            <div>
                <div className="wrapperPromoCreate">
                  <h2>Промокоди</h2>
                  <form id="promoCreate">
                    <p className="control has-addons">
                      <input className="input" type="text" placeholder="процент" required />
                      <a className="button">
                        %
                      </a>
                    </p>
                    <p className="control has-addons">
                      <input type="text" className="input" required id="datapicker2" onClick={this.dataPic} placeholder="день/місяць/рік" />
                      <a className="button">
                        ДАТА
                      </a>
                    </p>
                    <p className="control has-addons">
                      <input className="input" type="text" placeholder="код" />
                      <a className="button">
                        КОД
                      </a>
                    </p>
                    <p className="control">
                      <button className="button is-success" type="submit">Додати промо</button>
                    </p>
                  </form>
                </div>
                <div className="promoShowContent">{ promoArrShow }</div>
            </div>
        )
    },
});
