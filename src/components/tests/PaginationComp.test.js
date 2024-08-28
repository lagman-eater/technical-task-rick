import { render } from "@testing-library/react";
import * as reduxHooks from 'react-redux'
import PaginationComp from "../PaginationComp";

jest.mock('react-redux')

describe('PaginationComp', () => {
    it('Should make the pagination possible for heroes list', () => {
        jest.spyOn(reduxHooks, 'useSelector').mockReturnValue(1)
        const component = render(<PaginationComp />)
        expect(component).toMatchSnapshot()
    })
    it('Should change the page number to second(2)', () => {
        jest.spyOn(reduxHooks, 'useSelector').mockReturnValue(2)
        const component = render(<PaginationComp />)
        expect(component).toMatchSnapshot()
    })
})
