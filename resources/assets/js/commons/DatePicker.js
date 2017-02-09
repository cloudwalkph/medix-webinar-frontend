var React = require('react');

var DatePicker = React.createClass({

    propTypes: {
        id: React.PropTypes.string,
        hintText: React.PropTypes.string,
        name: React.PropTypes.string,
        className: React.PropTypes.string,
        autoOk: React.PropTypes.bool,
        onChange: React.PropTypes.func
    },

    getDefaultProps() {
        return {
            id: '',
            hintText: '',
            name: '',
            className: '',
            autoOk: true,
            onChange: function () {

            }
        };
    },

    getInitialState() {
        return {
            id: this.props.id,
            hintText: this.props.hintText,
            name: this.props.name,
            className: 'datepicker ' + this.props.className,
            autoOk: this.props.autoOk,
            onChange: this.props.onChange
        };
    },

    handleOnChange() {
        this.props.onChange;
    },

    componentDidMount() {
        $('.datepicker').pickadate({
            selectMonths: true, // Creates a dropdown to control month
            selectYears: 100 // Creates a dropdown of 15 years to control year
        });
    },

    render() {
        return (
            <div>
                <label htmlFor={this.state.id} className="active">{this.state.hintText}</label>
                <input type="date" id={this.state.id} name={this.state.name} className={this.state.className} onChange={this.handleOnChange} />
            </div>
        )
    }
});

module.exports = DatePicker;