import { render } from "@testing-library/react";
import * as reduxHooks from 'react-redux'
import SearchComp from "../SearchComp";

jest.mock('react-redux')

describe('SearchComp', () => {
    it('Should make search possible for empty string', () => {
        jest.spyOn(reduxHooks, 'useSelector').mockReturnValue('')
        const component = render(<SearchComp />)
        expect(component).toMatchSnapshot()
    })
    it('Should make the search possible for some string', () => {
        jest.spyOn(reduxHooks, 'useSelector').mockReturnValue('Rick')
        const component = render(<SearchComp />)
        expect(component).toMatchSnapshot()
    })
})
