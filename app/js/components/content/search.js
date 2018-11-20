const React = require('react');
const Ajax = require('../../commonJs/ajax.js');

class Search extends React.Component {
    constructor(props){
        super(props);
        this.textInput = React.createRef();
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(){
        var searchvalue = this.textInput.current.value;
        console.log(searchvalue);
        if(searchValue!==""){
            Ajax({
                url: '',
                method: 'get',
                data: {
                    act: 'search',
                    value: searchvalue
                },
                success: function(res){

                },
                fail: function(status){

                }
            });
        }
    }
    render(){
        return (
            <div className="search">
                <input type="text" name="search-box" placeholder="Search for Products..." ref={this.textInput}/>
                <input type="button" name="search-sub" value="Go" onClick={this.handleSubmit}/>
            </div>
        );
    }
}
module.exports = Search;