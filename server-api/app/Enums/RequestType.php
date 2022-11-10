<?php declare(strict_types=1);

namespace App\Enums;

use BenSampo\Enum\Enum;

/**
 * @method static static OptionOne()
 * @method static static OptionTwo()
 * @method static static OptionThree()
 */
final class RequestType extends Enum
{
    
    const CODE_200 = 200; // request ok
    const CODE_201 = 201; // created
    const CODE_400 = 400; // bad request
    const CODE_401 = 401; // not found
    const CODE_422 = 422; // Unprocessable Content

}
