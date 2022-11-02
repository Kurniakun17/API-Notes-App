import PropTypes from 'prop-types'

const showFormattedDate = (date,locale) => {
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    };
    if(locale ==='en'){
        return new Date(date).toLocaleDateString('en-EN', options);
    }
    return new Date(date).toLocaleDateString('id-ID', options);
};

showFormattedDate.propTypes={
    date:PropTypes.string.isRequired,
    locale:PropTypes.string.isRequired,
}

export { showFormattedDate };
