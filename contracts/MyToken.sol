pragma solidity 0.5.0;

import "../node_modules/openzeppelin-solidity/contracts/token/ERC20/ERC20Detailed.sol";
import "../node_modules/openzeppelin-solidity/contracts/token/ERC20/ERC20.sol";

contract MyToken is ERC20, ERC20Detailed {

    /// @notice Initialize the token with name, symbol and decimals, then mint supply to creator
    constructor (string memory _name, string memory _symbol, uint8 _decimals, uint256 _supply)
    public ERC20Detailed(_name, _symbol, _decimals)
    {
        _mint(msg.sender, (_supply * (10 ** uint256(_decimals))));
    }

}