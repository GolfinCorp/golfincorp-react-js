import {
  Table as ChakraTable,
  Thead,
  Tbody,
  Tr,
  Th,
  TableContainer
} from '@chakra-ui/react';

const Table = ({ headers, children }) => {
  return (
    <TableContainer background="#f9f9f9" borderRadius="md">
      <ChakraTable variant="simple">
        <Thead>
          <Tr>
            {headers.map((header, index) => (
              <Th key={`${header}-${index}`}>{header}</Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>{children}</Tbody>
      </ChakraTable>
    </TableContainer>
  );
};

export default Table;
