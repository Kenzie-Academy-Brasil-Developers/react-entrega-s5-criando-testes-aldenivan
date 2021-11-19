import { render, screen } from '@testing-library/react';

import Search from "../../components/Search"

describe("Input Component", () => {

    test("Should beto able to render an Input", () => {

        render(
            <Search />
        );

            const buttonElement =  screen.getByText("Buscar pelo CEP")

        expect(screen.getByPlaceholderText("Buscar pelo CEP")).toBeInTheDocument();
    }) 
})