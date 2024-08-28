import { render } from "@testing-library/react";
import * as reduxHooks from 'react-redux'
import FilterComp from "../FilterComp";

jest.mock('react-redux')

describe('FilterComp', () => {
    it('Should make the filter possible for default', () => {
        jest.spyOn(reduxHooks, 'useSelector').mockReturnValue('')
        const component = render(<FilterComp />)
        expect(component).toMatchSnapshot()
    })
    it('Should make the filter possible for the "alive" option', () => {
        jest.spyOn(reduxHooks, 'useSelector').mockReturnValue('alive')
        const component = render(<FilterComp />)
        expect(component).toMatchSnapshot()
    })
})
